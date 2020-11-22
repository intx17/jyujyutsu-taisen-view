importScripts('/my-doomsday-clock/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/my-doomsday-clock/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "/my-doomsday-clock/_nuxt/431da26.js",
    "revision": "d1f7d69b81468f840847812ff719e8fd"
  },
  {
    "url": "/my-doomsday-clock/_nuxt/79a0cce.js",
    "revision": "daad24e2a605e68ec73cecb6a2013f29"
  },
  {
    "url": "/my-doomsday-clock/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
  },
  {
    "url": "/my-doomsday-clock/_nuxt/b8cd4f2.js",
    "revision": "9fb54742ac3f84bba22a8b8a8f9423fe"
  }
], {
  "cacheId": "my-doomsday-clock-application",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/my-doomsday-clock/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/my-doomsday-clock/.*'), workbox.strategies.networkFirst({}), 'GET')
