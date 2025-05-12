/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1180px",
      },
      screens: {},
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // 기본 본문용 폰트
        heading: ["Montserrat", "Arial", "sans-serif"], // 제목용 폰트
      },
      colors: {},
    },
  },
  plugins: [],
};
