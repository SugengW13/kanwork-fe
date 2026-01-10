// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
  },
  routeRules: {
    '/': {
      redirect: '/login',
    },
  },
  devServer: { port: 3003 },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: { stylistic: true },
  },
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['sans-serif'],
        preload: true,
        display: 'swap',
      },
    ],
  },
})
