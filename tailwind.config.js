/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-text-color': '#f5f5f5',
        'black-background-color': '#252525',
        'black-text-color': '#121212',
        'orange-note-color': '#ffd179',
        'red-note-color': '#FF7C81',
        'green-note-color': '#C6D67D',
        'blue-note-color': '#7AC3E6',
        'purple-note-color': '#D986CC',
        'button-border-color': '#0000001a',
      },
    },
  },
  plugins: [],
};
