// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://bekzod:944455537@cluster0.iahpanx.mongodb.net/nuxt_mongodb?retryWrites=true&w=majority&appName=Cluster0",
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
