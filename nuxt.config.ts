export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    { src: './assets/styles/globals.scss', lang: 'sass' },
    { src: './assets/styles/reset.scss', lang: 'sass' }
  ],
  app: {
    head: {
      title: "Ai q fome",
    }
  },
  modules: [
    'nuxt-icon',
  ],
})
