/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#040308',
        'brand-purple': '#5346af',
        'brand-blue': '#004aad',
      },
    },
  },
  plugins: [],
}
