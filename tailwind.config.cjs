const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: {
          DEFAULT: {
            css: {
              p: {
                textAlign: 'justify'
              },
              li: {
                textAlign: 'justify'
              }
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  corePlugins: {
    // Make sure this is enabled (default: true)
    fontSmoothing: true,
  },
};