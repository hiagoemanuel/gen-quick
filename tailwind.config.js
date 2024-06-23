/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    colors: {
      dark: '#09090B',
      light: '#FAFAFA',
      grey: '#27272A',
      hover: {
        dark: '#27272A',
        light: '#FAFAFAE6',
      },
    },
    borderRadius: {
      DEFAULT: '0.375rem',
      xl: '1.5rem',
    },
    extend: {
      screens: {
        xs: '480px',
        'h-xs': { raw: '(min-height: 480px)' },
      },
    },
  },
  plugins: [],
}
