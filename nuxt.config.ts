export default {
  ssr: false,
  target: 'static',

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
  css: [
    {
      src: '~assets/css/styles.css'
    },
    {
      src: './node_modules/nes.css/css/nes.min.css'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/amplify.js', ssr: false },
    { src: '~/plugins/dataaccess.ts', ssr: false },
    { src: '~/plugins/dataaccess/player.ts', ssr: false },
    { src: '~/plugins/dataaccess/infectedData.ts', ssr: false },
    { src: '~/plugins/dataaccess/command.ts', ssr: false },
    { src: '~/plugins/dataaccess/curse.ts', ssr: false },
    { src: '~/plugins/dataaccess/battle.ts', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: '呪術対戦',
    lang: 'ja'
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
    hardSource: true,
    /*
    ** You can extend webpack config here
    */
    extend (_: any, __: any) {
    }
  },

  buildModules: ['@nuxt/typescript-build']
}
