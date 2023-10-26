// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://cn.bing.com',
        changeOrigin: true,
      },
    },
  },
})
