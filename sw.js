importScripts('/my-doomsday-clock-application/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/my-doomsday-clock-application/_nuxt/1417b41.js",
    "revision": "13e0b13b50383776d1169c66355f90a2"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/798f410.js",
    "revision": "31036b51bcf08cac361b72bfa01105fc"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/87a8737.js",
    "revision": "3ed79099c1a18ef64a8e1afd8ec187f9"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/a8a358b.js",
    "revision": "82ded6e662e212ff758f66f814b14eee"
  },
  {
    "url": "/my-doomsday-clock-application/_nuxt/b7424f3.js",
    "revision": "8dc9737ae23c323e6bce583d9d49649c"
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
