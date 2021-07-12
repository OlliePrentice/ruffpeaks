const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        zero: ['0', 0],
        xxs: ['0.688rem', '1rem'],
      },
      fontFamily: {
        'display': ['Adventure', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'body': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"',],
      },
      scale: {
        '-100': '-1',
      },
      minHeight: {
        'inherit': 'inherit'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        primary: colors.green,
        gray: colors.coolGray
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
