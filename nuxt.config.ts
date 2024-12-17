// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: {
            'Libre Baskerville+serif': true,
            'Open Sans': true,
            'Great Vibes': true,
        },
    },
})
