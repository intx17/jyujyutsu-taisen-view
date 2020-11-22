require('dotenv').config()
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default {
  ssr: false,

  /*
  ** Headers of the page
  */
  head: {
    title: 'my-doomsday-clock',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my-doomsday-clock' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      base: '/my-doomsday-clock-application/'
    }
    : {}
  ,

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [{
    src: '~assets/css/styles.css'
    }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  manifest: {
    name: '俺流終末時計',
    lang: 'ja',
  },

  proxy: {
    '/api/': {
      target: process.env.API_ROOT,
      pathRewrite: {
        '^/api/': '/'
      }
    },
    '/my-doomsday-clock-application/api/': {
      target: process.env.API_ROOT,
      pathRewrite: {
        '^/my-doomsday-clock-application/api/': ''
      }
    },
  },

  /*
    ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    prefix: process.env.DEPLOY_ENV === 'GH_PAGES'
      ? '/my-doomsday-clock-application/api'
      : '/api'

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
    }
  },

  buildModules: ['@nuxt/typescript-build']
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
