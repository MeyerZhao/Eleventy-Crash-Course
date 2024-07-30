/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js,njk}"],
  corePlugins: {
    // container: false
  },
  // darkMode: 'selector',
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {},
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [
    plugin(function({addComponents, addUtilities, matchUtilities, theme }) {
      // addComponents({
      //   '.container': {
      //     '--bs-gutter-x': '2.5rem',
      //     '--bs-gutter-y': '0',
      //     width: '100%',
      //     paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
      //     paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
      //     marginRight: 'auto',
      //     marginLeft: 'auto',
      //     '@screen sm': { maxWidth: '540px', },
      //     '@screen md': { maxWidth: '720px', },
      //     '@screen lg': { maxWidth: '960px', },
      //     '@screen xl': { maxWidth: '1140px', },
      //     '@screen xxl': { maxWidth: '1320px', },
      //   },
      // })
    })
  ],
}

