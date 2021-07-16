class AuthTokenProvider {
  constructor() {
    this.promise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
    this.authToken = undefined;
  }

  isPending() {
    return this.authToken === undefined;
  }

  getAuthToken() {
    if (this.authToken) {
      return this.authToken;
    }
    return this.promise;
  }

  setAuthToken(authToken) {
    if (!this.authToken) {
      this.resolve(authToken);
    }
    this.authToken = authToken;
  }
}

const tokenProvider = new AuthTokenProvider();

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'setToken') {
    tokenProvider.setAuthToken(event.data.token);
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') { return; }

  const url = new URL(event.request.url);
  // Request is not for this origin do not attach token to request.
  if (url.origin !== location.origin) { return; }

  // Do not append token to requests for static content. This is two fold:
  // 1. The token is not required for these resources.
  // 2. The token will not be available until the main application bundle has
  //    loaded, and attempting to wait for the token for these requests will
  //    result in a deadlock.
  if (url.pathname.lastIndexOf('/') === 0 || url.pathname.startsWith('/vs/')) {
    return;
  }

  // Attach the token to all other requests.
  event.respondWith((async () => {
    // On first load of the page it is possible that the token wasn't
    // provided to the client. In this case request the token.
    if (tokenProvider.isPending()) {
      const client = await self.clients.get(event.clientId);
      if (client) {
        client.postMessage({type: 'tokenRequest'});
      }
    }
    const token = await tokenProvider.getAuthToken();
    const headers = new Headers(event.request.headers || {});
    headers.set('editorauthorization', token);
    const req = new Request(event.request, {headers});
    return fetch(req);
  })());
});
