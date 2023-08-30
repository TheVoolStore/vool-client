/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'vool-orange': '#F85E00',
        'vool-light-orange': '#EEE7DF',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.black'),
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.black'),
        },
      });
    }),
  ],
};
