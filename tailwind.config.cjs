const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const lineClamp = require('@tailwindcss/line-clamp');

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
          }
        }
      }
    }
  },
  plugins: [forms, typography, lineClamp],
  corePlugins: {
    fontSmoothing: true,
  },
};