/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: '#09090B',
      light: '#FAFAFA',
      grey: '#27272A',
    },
    borderRadius: { DEFAULT: '6px' },
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
