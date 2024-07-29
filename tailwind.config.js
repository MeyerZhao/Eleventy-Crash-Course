/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  // darkMode: 'selector',
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}

