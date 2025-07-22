const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'text-white',
    'text-xl',
    'font-bold',
    'hover:text-blue-300',
    'bg-red-500',
    'sticky',
    'top-0',
    'z-50',
    'shadow-md',
    'py-4',
    'max-w-7xl',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'space-x-4',
    'font-medium',
    'justify-between',
    'items-center',
    'text-center',
    'text-sm',
    'text-gray-600',
    'bg-gray-100',
    'border-t',
    'mt-12',
    'py-6'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};