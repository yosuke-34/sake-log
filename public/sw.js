// 酒ログ Service Worker
const CACHE_NAME = 'sake-log-v1';
const SHARE_CACHE_NAME = 'share-target-cache';

// インストール時：最低限のシェルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
      ]);
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

// フェッチ：ネットワーク優先、失敗時にキャッシュ
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
            // 画像をキャッシュに一時保存
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
        // GETにリダイレクトして記録画面を表示
        return Response.redirect('/add?shared=1', 303);
      })()
    );
    return;
  }

  // APIリクエストやSupabaseはキャッシュしない
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('supabase') ||
    event.request.url.includes('/api/')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 成功したらキャッシュを更新
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // オフライン時はキャッシュから返す
        return caches.match(event.request);
      })
  );
});
