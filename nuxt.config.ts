export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["nuxt-particles", "@nuxt/ui"],
    css: [
        "devicon/devicon.min.css",
        "@fortawesome/fontawesome-free/css/all.css",
    ],
    compatibilityDate: "2024-07-27",
    ssr: false,
});
