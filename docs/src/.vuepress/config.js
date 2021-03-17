const { description } = require("../../../package");

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vivify Ideas Style Guides",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/png", href: "./favicon.png" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    logo: "./vi-logo.svg",
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      "/",
      ["/git-guide", "Git guide"],
      ["/security", "Security"],
      ["/laravel-style-guide", "Laravel style guide"],
      ["/angular-style-guide", "Angular style guide"],
      ["/react-style-guide", "React style guide"],
      ["/vue-style-guide", "Vue style guide"],
      ["/html-css-style-guide", "HTML/CSS style guide"],
      ["/boilerplates", "Boilerplates"],
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  markdown: {
    linkify: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-imsize"));
    },
  },
};
