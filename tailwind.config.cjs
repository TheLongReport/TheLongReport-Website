const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'bg-red-500',
    'text-white',
    'text-xl',
    'font-bold',
    'font-medium',
    'space-x-4',
    'hover:text-blue-300',
    'sticky',
    'top-0',
    'z-50',
    'shadow-md',
    'justify-between',
    'items-center',
    'text-center',
    'text-sm',
    'text-gray-600',
    'bg-gray-100',
    'border-t',
    'max-w-7xl',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'py-4',
    'py-6',
    'mt-12'
  ],

  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};