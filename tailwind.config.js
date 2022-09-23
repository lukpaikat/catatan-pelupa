/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-text-color': '#f5f5f5',
        'gray-text-color': '#505050',
        'black-background-color': '#252525',
        'white-background-color': '#f5f5f5',
        'black-text-color': '#121212',
        'orange-note-color': '#ffd179',
        'red-note-color': '#FF7C81',
        'green-note-color': '#C6D67D',
        'blue-note-color': '#7AC3E6',
        'purple-note-color': '#D986CC',
        'button-border-color': '#0000001a',
        'button-hover-color': '#ffffff4d',
        'button-active-color': '#ffffff80',
        'button-red-bg-color': '#FF4D4D33',
        'button-red-hover-color': '#FF4D4D4D',
        'button-red-active-color': '#FF4D4D80',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant }) => {
      addVariant('semi-dark', '[data-theme="semiDark"] &');
      addVariant('semi-and-dark', ['[data-theme="semiDark"] &', '[data-theme="dark"] &']);
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
