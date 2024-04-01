
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    { src: '/styles/globals.scss', lang: 'sass' },
    { src: '/styles/reset.scss', lang: 'sass' }
  ],
  app: {
    head: {
      title: "aiqfome - desafio",
    }
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/apollo',
  ],
  runtimeConfig: {
    githubURL: process.env.GITHUB_API,
    githubToken: process.env.GITHUB_TOKEN,
  },
  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "http://localhost:4000/graphql",
      },
    },
  },
})
