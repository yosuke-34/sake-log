/**
 * デバイス別ユーザー識別
 * ログイン不要で、端末ごとに固有のUUIDを生成・保持する。
 * 全レコードにこのIDを紐付けることで、デバイスごとのデータ分離を実現。
 *
 * 復元フロー:
 *  1. localStorage に device_id があればそれを使う
 *  2. なければ URL の ?d= パラメータから復元して localStorage に保存
 *  3. どちらもなければ新規生成
 *  4. URL に ?d= がなければ、履歴を書き換えて埋め込む（ブックマーク/ホーム画面用）
 */

const STORAGE_KEY = 'sake-log-device-id';
const URL_PARAM = 'd';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isValidUUID(id: string): boolean {
  return UUID_REGEX.test(id);
}

function generateUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getDeviceId(): string {
  if (typeof window === 'undefined') return '';

  // 1. localStorage から取得
  let id = localStorage.getItem(STORAGE_KEY);

  // 2. localStorage になければ URL パラメータから復元
  if (!id) {
    const params = new URLSearchParams(window.location.search);
    const urlId = params.get(URL_PARAM);
    if (urlId && isValidUUID(urlId)) {
      id = urlId;
      localStorage.setItem(STORAGE_KEY, id);
    }
  }

  // 3. どちらもなければ新規生成
  if (!id) {
    id = generateUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }

  // 4. URL に device_id を埋め込む（ブックマーク/ホーム画面追加時に保持されるように）
  embedDeviceIdInUrl(id);

  return id;
}

/**
 * URL に ?d=xxx を埋め込む（replaceState で履歴を汚さない）
 */
function embedDeviceIdInUrl(id: string): void {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get(URL_PARAM) !== id) {
      url.searchParams.set(URL_PARAM, id);
      window.history.replaceState(null, '', url.toString());
    }
  } catch {
    // URL操作に失敗しても動作に影響なし
  }
}
