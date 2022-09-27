/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

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
        'orange-dark-note-color': '#694E1A',
        'red-dark-note-color': '#6A1A1D',
        'green-dark-note-color': '#525E18',
        'blue-dark-note-color': '#184A62',
        'purple-dark-note-color': '#621856',
        'button-red-bg-color': '#FF4D4D',
      },
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant }) => {
      addVariant('semi-dark', '[data-theme="semiDark"] &');
      addVariant('semi-and-dark', ['[data-theme="semiDark"] &', '[data-theme="dark"] &']);
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('light', '[data-theme="light"] &');
    }),
  ],
};
