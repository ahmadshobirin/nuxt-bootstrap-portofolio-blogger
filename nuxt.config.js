export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',

  ssr:true,
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  env:{
    blogger:{
      id:"8820681713503677308", //change with your blog id
      key:"AIzaSyCHYxb99q00_skTtSqqWzcrzjHRQgeYRhY" //change with your public key
    }
  },
  googleAnalytics: {
    id: 'UA-188222023-1' //change with yours
  },
  head: {
    title: "Fajar Firmansyah",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fajar Firmansyah djafar_aloha starlight93 firmansyah93 programmer developer' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Fajar Firmansyah djafar_aloha starlight93 firmansyah93 programmer developer"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Fajar Firmansyah djafar_aloha starlight93 firmansyah93 programmer developer"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Fajar Firmansyah djafar_aloha starlight93 firmansyah93 programmer developer"
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
        content: "djafar_aloha"
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
  
  css: ['@/assets/main.css'],

  plugins: [
  ],

  components: true,
  sitemap: {
    hostname: 'https://fajarfirmansyah.com',
    gzip: true
  },
  buildModules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/eslint-module',{fix:true} ],
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
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    'bootstrap-vue/nuxt',
    "nuxt-compress"
  ],
  bootstrapVue:{
    icons:false
  },
  fontawesome: {
    icons: {
      solid: true
    }
  },
  
  modules: [
  ],
  axios: {},
  build: {
    babel: {
      compact: true
    }    
  }
}
