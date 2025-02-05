/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1350px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Default padding
        sm: "0.5rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primary: "#fa9c9b",
        secondary: "#f6d3d2",
        tertiary: "#EDBDBB",
        background: "#ffffff",
      },
      textColor: {
        button: "#212326",
        primary: "#212326",
      },
      boxShadow: {
        'outline-icon': '0 0 0px 2px black',
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        serif: ["Ubuntu", "serif"],
      },
    },
  },
  plugins: [],
};
