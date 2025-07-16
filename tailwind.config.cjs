const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /text-(white|gray-\d{3}|red-\d{3}|blue-\d{3})/
    },
    {
      pattern: /bg-(white|gray-\d{3}|red-\d{3}|blue-\d{3})/
    },
    {
      pattern: /hover:text-(blue-\d{3}|white)/
    },
    {
      pattern: /(prose|font-bold|shadow-md|sticky|top-\d+|z-\d+)/
    }
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};