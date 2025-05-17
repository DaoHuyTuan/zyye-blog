/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,mdx,js,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
