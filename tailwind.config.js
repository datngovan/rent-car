/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#1572D3",
      "primary-color-100": "#e7f0fa",
      white: "#FFF",
      "text-secondary": "#484848",
      "text-secondary-100": "#959595",
      "text-secondary-200": "#838383",
      "grey": "#d6d6d6"
    },
    extend: {
      keyframes:{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
