module.exports = {
  modules: ["nuxtent", "nuxt-netlify-cms"],
  nuxtent: {
    content: {
      page: "/_post",
      permalink: ":year/:slug",
      generate: [
        // assets to generate static build
        "get",
        "getAll"
      ]
    }
  },
  head: {
    title: '{{ name }}',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
    ],
    script: [
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ]
  },
  css: [
    '@/assets/css/main.scss'
  ]


};
