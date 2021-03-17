# VivifyIdeas - Style guides

This repo is used for creating a static website for Vivify Ideas coding style guides for various tech stacks.
The implementation itself has been achieved through the use of [VuePress](https://vuepress.vuejs.org/) and
the site is deployed to [Github pages](https://pages.github.com/).


## Dev set up

- Clone the repository
- Run `yarn` to install project dependencies
- Run `yarn build` to create static site files inside of /docs/src/.vuepress/dist directory
- Run `yarn dev` to start a local dev server on localhost:8080

## Add new style guide pages

- Create new md file in `/docs/src` directory
- Add a sidebar link to it in `/docs/.vuepress/config.js` file, in `themeConfig.sidebar` section

## Deploy

Thanks to Github Actions the site is deployed to Github pages automatically when something is pushed to master branch.
