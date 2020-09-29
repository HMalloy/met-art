export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A fun site to play with the art of The Met!' },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: 'art museum, the art museum, art museum exhibits, art museum websites, metropolitan art museum, famous artists'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    titleTemplate: '%s - Met Art'
  },

  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Met Art` : `Met Art`;
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
