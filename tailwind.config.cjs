/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },

    fontFamily: {
      sans: ["Inter", "SF Pro Display", "sans-serif"],
    },

    fontSize: {
      xs: "0.75rem", //12
      sm: "0.875rem", //14
      base: "1.0625", //17
      lg: ["1.875rem", "1.121"], //19
      xl: "1.3125rem", //21
      "2xl": "1.5rem", //24
      "3xl": "1.75rem", //28
      "4xl": ["2.5rem", "1.1"], //40
      "5xl": ["4.5rem", "1.05"], //72
    },
    keyframes: {
      "carousel-move": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },}
    },
    animation: {
      "carousel-move": "carousel-move var(--duration,80s)infinite",
    },

    extend: {},
  },
  plugins: [],
};
