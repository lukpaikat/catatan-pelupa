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
        'button-hover-color': '#ffffff4d',
        'button-active-color': '#ffffff80',
        'button-red-bg-color': '#FF4D4D33',
        'button-red-hover-color': '#FF4D4D80',
        'button-red-active-color': '#FF4D4D4D',
      },
    },
  },
  plugins: [],
};
