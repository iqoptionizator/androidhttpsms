export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'HTTP SMS - Convert your android phone into an SMS Gateway.',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Use your android phone to send and receive SMS messages using a simple HTTP API.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@NdoleStudio' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'HTTP SMS - Convert your android phone into an SMS Gateway.',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HTTP SMS - Convert your android phone into an SMS Gateway.',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Use your android phone to send and receive SMS messages using a simple HTTP API.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Use your android phone to send and receive SMS messages using a simple HTTP API.',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://httpsms.com/header.png',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://httpsms.com/header.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/filters.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Simple usage
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyClL8AX2H_F77_n8yu5FgLzBmJTiSM0NsQ',
          authDomain: 'httpsms-86c51.firebaseapp.com',
          projectId: 'httpsms-86c51',
          storageBucket: 'httpsms-86c51.appspot.com',
          messagingSenderId: '877524083399',
          appId: '1:877524083399:web:430d6a29a0d808946514e2',
          measurementId: 'G-EZ5W9DVK8T',
        },
        services: {
          auth: true,
          analytics: true,
        },
      },
    ],
    // Simple Usage
    [
      'nuxt-highlightjs',
      {
        style: 'androidstudio',
      },
    ],
    '@nuxtjs/sitemap', // always put it at the end
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'http://localhost:8000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'mdiSvg',
    },
    theme: {
      dark: true,
    },
  },

  router: {
    middleware: ['user'],
  },

  sitemap: {
    hostname: 'https://httpsms.com',
    gzip: true,
    exclude: ['/messages', '/settings', '/threads**'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
