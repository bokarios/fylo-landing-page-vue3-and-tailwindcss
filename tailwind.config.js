/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-intro': 'hsl(217, 28%, 15%)',
      },
    },
  },
  plugins: [],
}
