/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#faf7ef',
        pink: '#f992d3',
        bordoux: '#400039',
        navy: '#263742',
        gray: '#4f4f4f',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
