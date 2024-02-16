// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@unocss/nuxt", "@nuxtjs/eslint-module"],
  css: ["@unocss/reset/tailwind-compat.css"],
});
