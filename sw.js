importScripts('/my-doomsday-clock-application/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/my-doomsday-clock-application/_nuxt/05e7891.js",
    "revision": "b96a4059fcd1ca60ec08d0a540177816"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/5ce5296.js",
    "revision": "29df141eee2baf0ac3da668ec05476c8"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/8958dc3.js",
    "revision": "a2aca7330fcf323e422950719f77d662"
  }
], {
  "cacheId": "my-doomsday-clock-application",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/my-doomsday-clock-application/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/my-doomsday-clock-application/.*'), workbox.strategies.networkFirst({}), 'GET')
