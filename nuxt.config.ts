const fonts = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;450;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap'
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Aslam — Full-Stack Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Aslam, full-stack developer (Laravel and Vue.js).' },
        { name: 'theme-color', content: '#F6EBCE' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: fonts }
      ]
    }
  }
})
