const themeSwapper = require('tailwindcss-theme-swapper')
const colors = require('tailwindcss/colors')

const darkest = colors.gray[950]
const lightest = colors.gray[100]

const themeSwapperPlugin = themeSwapper({
  themes: [
    {
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
            DEFAULT: colors.sky[300],
            hover: colors.sky[200],
            foreground: darkest,
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
    },
    {
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
    },
  ],
})
exports.themeSwapperPlugin = themeSwapperPlugin
