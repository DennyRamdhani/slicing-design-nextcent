/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#4CAF4F',
        'secondary': '#263238',
        'info': '#2194F3',
        'neutral-black': '#263238',
        'neutral-dark-grey': '#4D4D4D',
        'neutral-grey': '#717171',
        'neutral-light-grey': '#89939E',
        'neutral-grey-blue': '#ABBED1',
        'neutral-silver': '#F5F7FA',
        'neutral-white': '#Ffffff',
        'shade-satu' : '#43A046',
        'shade-dua' : '#388E3B',
        'shade-tiga' : '#237D31',
        'shade-empat' : '#1B5E1F',
        'shade-lima' : '#103E13',
        'tint-satu' : '#66BB69',
        'tint-dua' : '#81C784',
        'tint-tiga' : '#A5D6A7',
        'tint-empat' : '#C8E6C9',
        'tint-lima' : '#E8F5E9',
        'action-warning' : '#FBC02D',
        'action-error' : '#E53835',
        'action-success' : '#2E7D31',   
      }
    },
  },
  plugins: [],
}