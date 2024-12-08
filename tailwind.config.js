/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-loop": "slide-loop 12s ease-in-out infinite",
      },
      keyframes: {
        "slide-loop": {
          "0%, 25%": { transform: "translateX(0)" }, // First image center, pause
          "33.33%, 58.33%": { transform: "translateX(-100%)" }, // Second image center, pause
          "66.66%, 91.66%": { transform: "translateX(-200%)" }, // Third image center, pause
          "100%": { transform: "translateX(-300%)" }, // Reset to the beginning
        },
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: ["daisyui"],
};
