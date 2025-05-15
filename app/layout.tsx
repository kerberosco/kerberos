import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Kerberos",
  description:
    "켈베로스(캘베로스, 캘배로스) - MICE 기반 마케팅 기획사 | 오프라인 팝업, 전시, 박람회 기획 전문 | Kerberos Marketing Group",
  icons: [
    {
      url: "/kerberos.ico",
      sizes: "32x32",
    },
  ],
  keywords:
    "켈베로스, 캘베로스, 캘배로스, kerberos, mice, 마케팅, 기획사, 팝업스토어, 전시기획, 박람회",
  openGraph: {
    type: "website",
    title: "Kerberos - MICE 기반 마케팅 기획사",
    description:
      "켈베로스(캘베로스, 캘배로스) - 오프라인 팝업, 전시, 박람회 기획 전문",
    url: "https://kbrs.co.kr",
    images: [
      {
        url: "/kerberos.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kbrs.co.kr",
  },
  other: {
    "naver-site-verification": "e642e6051c62d02caba3e508305dc2826689e20b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
