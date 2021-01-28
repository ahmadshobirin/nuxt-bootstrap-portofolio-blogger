export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',

  ssr:true,
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  env:{
    blogger:{
      id:"8820681713503677308",
      key:"AIzaSyCHYxb99q00_skTtSqqWzcrzjHRQgeYRhY"
    }
  },
  head: {
    title: "Fajar Firmansyah Programmer",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fajar Firmansyah' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Fajar Firmansyah"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Fajar Firmansyah"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Fajar Firmansyah Programmer"
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: "id"
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: "https://fajarfirmansyah.com"
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: "website"
      },

      {
        hid: 'profile:first_name',
        property: 'profile:first_name',
        content: "Fajar"
      },
      {
        hid: 'profile:last_name',
        property: 'profile:last_name',
        content: "Firmansyah"
      },
      {
        hid: 'profile:username',
        property: 'profile:username',
        content: "starlight93"
      },
      {
        hid: 'profile:gender',
        property: 'profile:gender',
        content: "male"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  colorMode: {
    preference: 'light',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  sitemap: {
    hostname: 'https://fajarfirmansyah.com',
    gzip: true,
    // routes: [
    //   '/'
    // ]
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/sitemap',
    ['@nuxtjs/eslint-module',{fix:true} ],
    ['nuxt-vue-select', { /* module options */ }],
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    '@nuxtjs/google-analytics',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',    
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/svg',
    'bootstrap-vue/nuxt',
    "nuxt-compress",
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  bootstrapVue:{
    icons:false
  },
  fontawesome: {
    icons: {
      solid: true
    }
  },
  googleAnalytics: {
    id: 'UA-188222023-1'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  auth:false,
  auths: {
    token: {
      prefix: 'auth.'
    },
    strategies: {
      google: {
        clientId: '151605242378-49qph0ne24v09af4f3933b9ikd5mkgj2.apps.googleusercontent.com',
        codeChallengeMethod: '',
        redirectUri:"http://localhost:3000",
        // scope: ["openid", "profile", "email"]
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
  },
  router: {
    // middleware: ['auth'],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
    
  }
}
