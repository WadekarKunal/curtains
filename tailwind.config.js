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
          50: "#E8F3F5",
          100: "#D1E7EA",
          200: "#A1C2BD",
          300: "#8FB8B3",
          400: "#7DAEA9",
          500: "#708993",
          600: "#5A6E76",
          700: "#445359",
          800: "#2E383C",
          900: "#19183B"
        },
        accent: {
          light: "#A1C2BD",
          DEFAULT: "#708993",
          dark: "#19183B"
        }
      }
    }
  },
  plugins: []
}
