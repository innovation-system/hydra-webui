export default {
  port: process.env.PORT || 3000,
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "hydra-web",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    { src: "~/plugins/modules-with-no-ssr", ssr: false },
    { src: "~/plugins/filters" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  eslint: {
    cache: true,
    fix: true,
    threads: true,
  },

  stylelint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],

  // Public run time configuration
  publicRuntimeConfig: {
    HYDRA_PROXY_URL: process.env.HYDRA_PROXY_URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    "/clients": {
      target: process.env.HYDRA_PROXY_URL,
      changeOrigin: true,
      followRedirects: true, // Add this to follow redirects server-side
    },
    "/oauth2": {
      target: process.env.HYDRA_PROXY_URL,
      changeOrigin: true,
      followRedirects: true, // Add this to follow redirects server-side
    },
  },

  /* application run at root by default */
  // router: {
  //   base: "/hydra" || "",
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
