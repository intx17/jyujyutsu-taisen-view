importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1281c39.js",
    "revision": "2bd789de4684b9480fc118053552cd55"
  },
  {
    "url": "/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "/_nuxt/3e36ed8.js",
    "revision": "d51448c12e435f3f217db27f649aff50"
  },
  {
    "url": "/_nuxt/431da26.js",
    "revision": "d1f7d69b81468f840847812ff719e8fd"
  },
  {
    "url": "/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
  }
], {
  "cacheId": "my-doomsday-clock-application",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
