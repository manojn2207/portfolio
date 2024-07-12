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
          dark: "#1E293B",
          mid: "#374b6d",
          light: "#718cb7",
          very_light:"#9dafcd",
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