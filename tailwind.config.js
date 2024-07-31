/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  // prefix: 'tw-',
  content: ["./src/**/*.{html,js,njk}"],
  corePlugins: {
    preflight: false,
    container: false
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
    // Customizing Spacing
    // https://tailwindcss.com/docs/customizing-spacing
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '3rem',
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
      addUtilities({
        ".border-bottom": { borderBottom: "var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)" },
        ".border-bottom-0": { borderBottom: "0" }
      });
      addUtilities({
        ".g-0,.gx-0": { "--bs-gutter-x": "0" },
        ".g-0,.gy-0": { "--bs-gutter-y": "0" },
        ".g-1,.gx-1": { "--bs-gutter-x": "0.25rem" },
        ".g-1,.gy-1": { "--bs-gutter-y": "0.25rem" },
        ".g-2,.gx-2": { "--bs-gutter-x": "0.5rem" },
        ".g-2,.gy-2": { "--bs-gutter-y": "0.5rem" },
        ".g-3,.gx-3": { "--bs-gutter-x": "1rem" },
        ".g-3,.gy-3": { "--bs-gutter-y": "1rem" },
        ".g-4,.gx-4": { "--bs-gutter-x": "1.5rem" },
        ".g-4,.gy-4": { "--bs-gutter-y": "1.5rem" },
        ".g-5,.gx-5": { "--bs-gutter-x": "3rem" },
        ".g-5,.gy-5": { "--bs-gutter-y": "3rem" }
      });
    })
  ],
}

