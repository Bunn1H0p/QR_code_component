/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'light-gray': '#D5E1EF',
          'grayish-blue': '#7B879D',
          'dark-blue': '#1F3251',
        },
      },
    },
    plugins: [],
  };
  