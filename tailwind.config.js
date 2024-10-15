/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-slate": "linear-gradient(to left, #f8fafc, #e2e8f0)",
        "custom-bg-li": "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      },
      fontFamily: {
        custom: ["Black Han Sans", "sans-serif"], // Replace 'sans-serif' with a fallback font if needed
        text: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      combined: {
        "0%": { transform: "translateY(0) rotate(0deg)" },
        "50%": { transform: "translateY(-2rem) rotate(180deg)" },
        "100%": { transform: "translateY(0) rotate(360deg)" },
      },
      rotate: {
        "0%": { transform: " rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      loading: "rotate 2s linear infinite",
    },
  },
  plugins: [],
};
