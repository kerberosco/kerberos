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
      colors: {
        primary: "#FF8A00", // 오렌지 메인 컬러
        white: "#FFFFFF", // 흰색
        black: "#000000", // 검은색
        card: "#141414", // 카드 배경색
        "portfolio-dark": "#363636", // 포트폴리오 파트너사 배경색
        footer: {
          text: "#C5C5C5", // 푸터 텍스트 색상
        },
      },
      fontSize: {
        "36": "36px",
        "24": "24px",
        "18": "18px",
        "16": "16px",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      letterSpacing: {
        "tight-2": "-0.02em",
      },
      lineHeight: {
        "150": "1.5",
        "140": "1.4",
        "130": "1.3",
      },
    },
  },
  plugins: [],
};
