const themeSwapper = require('tailwindcss-theme-swapper')
const colors = require('tailwindcss/colors')

const darkest = colors.gray[950]
const lightest = colors.gray[100]

const customEmerald = {
  50: '#DEEAE',
  100: '#AFD4BD',
  200: '#89BEA0',
  300: '#6BA988',
  400: '#4F9373',
  500: '#3B7D61',
  600: '#2E6E56',
  700: '#235F4B',
  800: '#1B4F40',
  900: '#134035',
  950: '#0D312A',
}

const defaultLightTheme = {
  name: 'base',
  selectors: [':root', '[data-theme="light"]'],
  theme: {
    colors: {
      background: lightest,
      foreground: darkest,
      border: colors.gray[200],
      input: colors.gray[200],
      ring: colors.gray[200],
      primary: {
        DEFAULT: customEmerald[500],
        hover: customEmerald[400],
        title: customEmerald[800],
        foreground: lightest,
      },
      secondary: {
        DEFAULT: colors.lime[500],
        hover: colors.lime[400],
        foreground: darkest,
      },
      danger: {
        DEFAULT: colors.red[500],
        hover: colors.red[400],
        foreground: lightest,
      },
      success: {
        DEFAULT: colors.teal[500],
        hover: colors.teal[400],
        foreground: darkest,
      },
      warn: {
        DEFAULT: colors.teal[500],
        hover: colors.teal[400],
        foreground: lightest,
      },
      muted: {
        DEFAULT: colors.gray[500],
        hover: colors.gray[400],
        foreground: lightest,
      },
      accent: {
        DEFAULT: colors.teal[600],
        hover: colors.teal[500],
        foreground: lightest,
      },
      popover: {
        DEFAULT: lightest,
        foreground: darkest,
      },
      card: {
        DEFAULT: lightest,
        foreground: darkest,
      },
    },
  },
}
const darkTheme = {
  name: 'dark',
  selectors: ['.dark', '[data-theme="dark"]'],
  theme: {
    colors: {
      background: darkest,
      foreground: lightest,
      border: colors.gray[800],
      input: colors.gray[950],
      ring: colors.gray[800],
      muted: {
        DEFAULT: colors.gray[600],
        hover: colors.gray[500],
        foreground: lightest,
      },
      popover: {
        DEFAULT: darkest,
        foreground: lightest,
      },
      card: {
        DEFAULT: darkest,
        foreground: lightest,
      },
    },
  },
}

const themeSwapperPlugin = themeSwapper({
  themes: [defaultLightTheme, darkTheme],
})
exports.themeSwapperPlugin = themeSwapperPlugin
