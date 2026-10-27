/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        camel: { DEFAULT: '#C6B39A', light: '#D9C9B3', dark: '#A89379' },
        boho: { DEFAULT: '#7B694E', light: '#968265', dark: '#5C4D38' },
        rubine: { DEFAULT: '#8D3A3C', light: '#A85052', dark: '#6B2A2C' },
        tamarind: { DEFAULT: '#3B1319', light: '#5C2128', dark: '#2A0E13' },
        roast: { DEFAULT: '#280B0F', light: '#3E1419', dark: '#1A0709' },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
