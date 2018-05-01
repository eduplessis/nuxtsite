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
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma'
  ]
};
