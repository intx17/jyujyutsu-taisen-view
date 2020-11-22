importScripts('my-doomsday-clock-application/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "my-doomsday-clock-application/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "my-doomsday-clock-application/_nuxt/431da26.js",
    "revision": "d1f7d69b81468f840847812ff719e8fd"
  },
  {
    "url": "my-doomsday-clock-application/_nuxt/8783461.js",
    "revision": "44fced918898691d511f9ebd0d7d0619"
  },
  {
    "url": "my-doomsday-clock-application/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
  },
  {
    "url": "my-doomsday-clock-application/_nuxt/ff391db.js",
    "revision": "8de24eede60e623548976eb20de59437"
  }
], {
  "cacheId": "my-doomsday-clock-application",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('my-doomsday-clock-application/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('my-doomsday-clock-application/.*'), workbox.strategies.networkFirst({}), 'GET')
