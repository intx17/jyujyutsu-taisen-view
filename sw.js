importScripts('/my-doomsday-clock-application/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/my-doomsday-clock-application/_nuxt/0b70b0c.js",
    "revision": "dbc90868fa280b5845700e76c78de80a"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/221a903.js",
    "revision": "589226713513dd3109be981accffbf22"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/5ce5296.js",
    "revision": "29df141eee2baf0ac3da668ec05476c8"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
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
