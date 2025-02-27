// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    MONGO_URI: process.env.PRODUCTION_MODE
      ? process.env.PRODUCTION_MONGO_URI
      : process.env.MONGO_URI,
    BOT_TOKEN: process.env.BOT_TOKEN,
  },
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
  build: {
    transpile: [
      "@headlessui/tailwindcss",
      "@headlessui/vue",
      "vue-toastification",
    ],
  },
});
