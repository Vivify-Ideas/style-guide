# Style guides

This repo is used for creating a static website for Vivify Ideas coding style guides for various tech stacks.
The implementation itself has been achieved through the use of Vuepress (https://vuepress.vuejs.org/) and
the site is deployed to Github pages (https://pages.github.com/).


## Dev requirements

- Node.js >= 8

## Dev set up

- Clone the repository
- Run ```npm install```  to install project dependencies
- Run ```npm run build``` to create static site files inside of /docs/.vuepress/dist directory
- Run ```npm run dev``` to start a local dev server on localhost:8080

## Add new style guide pages

- Create new md fajl in /docs directory
- Add a sidebar link to it in /docs/.vuepress/config.js file, in themeConfig.sidebar section

## Deploy

To deploy the site to Github pages, run deploy.sh bash script
