/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['"Playfair Display SC"', 'serif'],
        subheading:['Cinzel', 'serif'],
        body:['Poppins', 'sans-serif',]
      },
    },
  },
  plugins: [],
};

