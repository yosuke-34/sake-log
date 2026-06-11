// 酒ログ Service Worker
// バージョンを上げると古いキャッシュが削除される
const CACHE_NAME = 'sake-log-v2';
const SHARE_CACHE_NAME = 'share-target-cache';
const OFFLINE_PAGE = '/offline.html';

// インストール時：シェルとオフラインページをプリキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/calendar',
        '/columns',
        '/responsible-drinking',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        OFFLINE_PAGE,
      ]).catch(() => {
        // 個別の失敗は無視（一部リソースが取れなくてもSW自体は登録）
      });
    })
  );
  self.skipWaiting();
});

// アクティベート時：古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME && key !== SHARE_CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// フェッチ：ネットワーク優先、失敗時にキャッシュ、最終フォールバックはoffline.html
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Share Target: 写真アプリからの共有POSTを処理
  if (event.request.method === 'POST' && url.pathname === '/add' && url.searchParams.has('shared')) {
    event.respondWith(
      (async () => {
        try {
          const formData = await event.request.formData();
          const photo = formData.get('photo');
          if (photo && photo instanceof File) {
            const cache = await caches.open(SHARE_CACHE_NAME);
            const response = new Response(photo, {
              headers: {
                'Content-Type': photo.type,
                'X-File-Name': photo.name,
              },
            });
            await cache.put('/shared-photo', response);
          }
        } catch (e) {
          console.error('Share target error:', e);
        }
        return Response.redirect('/add?shared=1', 303);
      })()
    );
    return;
  }

  // GET以外、SupabaseやAPIはキャッシュしない（生存しないと困るリクエスト）
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('supabase') ||
    event.request.url.includes('/api/')
  ) {
    return;
  }

  // ナビゲーションリクエスト（HTMLページ）はネットワーク優先＋オフラインフォールバック
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          // ネットワーク失敗時：まずキャッシュ、最後にオフラインページ
          const cached = await caches.match(event.request);
          if (cached) return cached;
          const offline = await caches.match(OFFLINE_PAGE);
          if (offline) return offline;
          return new Response('オフラインです', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
        }
      })()
    );
    return;
  }

  // その他のリソース（JS/CSS/画像）はネットワーク優先、失敗時キャッシュ
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
