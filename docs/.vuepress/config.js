module.exports = {
    base: '/',
    title: 'Vivify Ideas Style Guides',
    description: 'Vivify Ideas coding style guides for various tech stacks',
    head: [
        ['link', {rel: 'shortcut icon', type: "image/png", href: './favicon.png'}]
    ],
    themeConfig: {
        logo: './vi-logo.svg',
        sidebar: [
            '/',
            ['/laravel-style-guide', 'Laravel style guide'],
            ['/angular-style-guide', 'Angular style guide'],
            ['/react-style-guide', 'React style guide'],
            ['/vue-style-guide', 'Vue style guide'],
            ['/html-css-style-guide', 'HTML/CSS style guide'],
            ['/boilerplates', 'Boilerplates']
        ]
    }
};