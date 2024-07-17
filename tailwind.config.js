/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#a031e0",
          mid: "#a948e0",
          light: "#b66ce0",
          very_light:"#c893e6",
        },
        secondary:{
          dark: "#8b948d",
          mid: "#B2BEB5",
          light: "#b9c4bb",
          very_light:"#c5d6c8",
        }
      },
    },
  },
  plugins: [],
}