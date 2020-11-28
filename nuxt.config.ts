export default {
  ssr: false,

  /*
  ** Headers of the page
  */
  head: {
    title: 'jyujyutsu-taisen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my-doomsday-clock' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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
    { src: '~/plugins/amplify.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  manifest: {
    name: '俺流終末時計',
    lang: 'ja',
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {},

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
