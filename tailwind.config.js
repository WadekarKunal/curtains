/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF5F4",
          100: "#FDF0EF",
          200: "#FADFDE",
          300: "#EF9994",
          600: "#B3736F",
          700: "#8F5C59"
        },
        neutral: {
          50: "#ECE3CB",
          600: "#5E5B51",
          900: "#181714"
        }
      }
    }
  },
  plugins: []
}
