"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PortfolioCard from "../PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/app/constants/portfolio";
import FadeInUp from "../animations/FadeInUp";

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="w-full bg-black py-[80px] md:py-[150px] tracking-tight-2"
      id="portfolio"
    >
      <div className="mx-auto">
        <div className="w-full max-w-desktop mx-auto px-5 sm:px-[30px] mb-[30px] sm:mb-[50px] md:mb-[74px]">
          <FadeInUp>
            <h2 className="text-primary font-heading font-bold text-14 sm:text-16 mb-[20px] sm:mb-[30px] md:mb-[38px] text-center">
              Portfolio
            </h2>
          </FadeInUp>
          <div className="relative flex items-center justify-between">
            <button
              onClick={scrollPrev}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="이전 슬라이드"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h3 className="text-white text-center text-20 sm:text-24 md:text-36 font-bold leading-140 px-2 sm:px-4">
              다양한 오프라인 기획 경험으로
              <br />
              전략적인 솔루션을 제공합니다.
            </h3>
            <button
              onClick={scrollNext}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="다음 슬라이드"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[10px] sm:gap-[20px] pl-5">
              {PORTFOLIO_ITEMS.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
