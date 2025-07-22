const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'text-white',
    'text-xl',
    'font-bold',
    'bg-red-500',
    'hover:text-blue-300',
    'sticky',
    'top-0',
    'z-50',
    'shadow-md',
    'space-x-4',
    'text-center',
    'text-sm',
    'text-gray-600',
    'bg-gray-100',
    'border-t',
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};