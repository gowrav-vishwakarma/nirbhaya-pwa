/* Keep SW_VERSION equal to PUSH_BUILD in src/core/platform/push-debug.ts. */
var SW_VERSION = 'pwa-push-7';

function rememberPush(entry) {
  return new Promise(function (resolve) {
    try {
      var req = indexedDB.open('sos-push-debug', 1);
      req.onerror = function () {
        resolve();
      };
      req.onupgradeneeded = function () {
        if (!req.result.objectStoreNames.contains('log')) {
          req.result.createObjectStore('log', { autoIncrement: true });
        }
      };
      req.onsuccess = function () {
        var tx = req.result.transaction('log', 'readwrite');
        tx.objectStore('log').add(entry);
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          resolve();
        };
      };
    } catch (e) {
      resolve();
    }
  }).then(function () {
    return self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (windows) {
      windows.forEach(function (client) {
        client.postMessage({ type: 'sw-push', version: SW_VERSION, entry: entry });
      });
    });
  });
}

self.addEventListener('push', function (event) {
  var entry = { at: Date.now(), kind: 'push', title: '', body: '' };
  try {
    var payload = event.data ? event.data.json() : {};
    var note = payload.notification || {};
    entry.title = note.title || '';
    entry.body = note.body || '';
  } catch (e) {
    entry.kind = 'push-unreadable';
  }
  event.waitUntil(rememberPush(entry));
});

self.addEventListener('message', function (event) {
  if (!event.data || event.data.type !== 'sw-ping') return;
  if (event.source && event.source.postMessage) {
    event.source.postMessage({ type: 'sw-hello', version: SW_VERSION });
  }
});

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyATkKRDqPJwPAoH8_MZy9dOD_dEA6VC7tM',
  authDomain: 'shoutout-1e61c.firebaseapp.com',
  projectId: 'shoutout-1e61c',
  storageBucket: 'shoutout-1e61c.appspot.com',
  messagingSenderId: '599043169760',
  appId: '1:599043169760:web:3522088aa2511184455f85',
});

self.addEventListener('install', function () {
  self.skipWaiting();
});

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var title = (payload.notification && payload.notification.title) || 'SOS Bharat';
  var body = (payload.notification && payload.notification.body) || '';
  return self.registration.showNotification(title, {
    body: body,
    icon: '/icons/icon-128x128.png',
    data: payload.data || {},
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var data = event.notification.data || {};
  var path = data.screen && String(data.screen).startsWith('/') ? data.screen : '/notifications';
  var url = new URL(path, self.location.origin);
  if (data.sosEventId) url.searchParams.set('sosEventId', data.sosEventId);
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if ('focus' in client) {
          return client.focus().then(function () {
            return client.navigate(url.href);
          });
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url.href);
    }),
  );
});
