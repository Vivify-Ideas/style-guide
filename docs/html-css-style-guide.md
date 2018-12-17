# HTML/CSS Review Guide

[[toc]]

## General information

* We use SASS to compile our CSS and PostCSS for autoprefixer;
* Use SASS variables for static and CSS custom properties for dynamic values;
* Use PostCSS autoprefixer plugin;
* Use SVG-sprite plugin;
* Use woff2 fonts, with fallback to woff format;


## CSS guidelines

* Always use class selectors; Never use ID for styling.
* Let the ```calc()``` do the math for you. No need for stuff like ```width: 13.765377%``` for creating grid or something like that.
* We use BEM for naming and style organization.
* **Class naming:** Start with two-letter project-name prefix (eg. ```.vi-```). This is also good practice to differentiate our code from vendor styles.
* Use CSS-Grid for global layout with fallback to flexbox, it's easier. Use flexbox for single dimension and css-grid for two-dimensional alignment.
* **Nesting of BEM components:** Only one level of nesting is allowed. For second level, we create a new component.
* **Ordering of media queries:** Start with mobile styles first, than add media queries for larger screens.


## HTML guidelines

* Use semantic HTML5 elements ```<main>```, ```<header>```, ```<footer>```, ```<section>```, ```<article>```, ```<nav>``` and others where ever applicable.
* Use minimum number of elements.
