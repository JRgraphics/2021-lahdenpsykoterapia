export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Lahden Psykoterapia",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Psykoterapia-palveluita Lahden alueella jo toista vuosikymmentä.",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og-type", property: "og:type", content: "website" },
      { hid: "og-title", property: "og:title", content: "Lahden Psykoterapia" },
      {
        hid: "og-desc",
        property: "og:description",
        content:
          "Psykoterapia-palveluita Lahden alueella jo toista vuosikymmentä.",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "https://lahdenpsykoterapia.fi/logo.jpg",
      },
      {
        hid: "og-url",
        property: "og:url",
        content: "https://lahdenpsykoterapia.fi",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/checkView", "~/plugins/components"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
