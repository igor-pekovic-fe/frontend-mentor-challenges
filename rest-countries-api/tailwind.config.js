/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-bg": "url('src/assets/img/search-outline.svg')",
      },
    },
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)",
      "darkmode-bg": "hsl(207, 26%, 17%)",
      "lightmode-text": "hsl(200, 15%, 8%)",
      "dark-grey": "hsl(0, 0%, 52%)",
      "lightmode-bg": "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
