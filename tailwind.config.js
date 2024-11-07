/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  plugins: [],
};
