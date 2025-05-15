"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import FadeInUp from "../animations/FadeInUp";
import ContactForm from "../ContactForm";
import ModalAnimation from "../animations/ModalAnimation";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);

  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] md:h-[564px] overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
        <Image
          src="/common/banners/contact-banner.jpg"
          alt="켈베로스 문의하기 배너 이미지"
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 font-bold tracking-tight-2" />
      <div className="absolute inset-0 mx-auto max-w-desktop h-full flex items-center px-5 sm:px-[30px]">
        <div>
          <FadeInUp>
            <h2 className="text-primary font-heading font-bold text-14 sm:text-16 mb-[30px] sm:mb-[38px]">
              Contact us
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <h3 className="text-white text-28 sm:text-32 md:text-36 font-bold leading-140 mb-[40px] sm:mb-[60px]">
              오프라인 브랜딩의 모든 것,
              <br />
              켈베로스가 앞장서겠습니다.
            </h3>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <Button text="문의하기" onClick={() => setShowForm(true)} />
          </FadeInUp>
        </div>
      </div>

      <ModalAnimation isOpen={showForm} onClose={handleClose}>
        <div className="bg-black border border-white/10 rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white"
            aria-label="닫기"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ContactForm onClose={handleClose} />
        </div>
      </ModalAnimation>
    </section>
  );
}
