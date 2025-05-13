"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PortfolioCard from "../PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/app/constants/portfolio";

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
      className="w-full bg-black pb-[150px] tracking-tight-2"
      id="portfolio"
    >
      <div className="mx-auto">
        <div className="w-full max-w-desktop mx-auto px-[30px] mb-[74px]">
          <h2 className="text-primary font-heading font-bold text-16 mb-[38px] text-center">
            Portfolio
          </h2>
          <div className="relative flex items-center justify-between">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="이전 슬라이드"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <h3 className="text-white text-center text-36 font-bold leading-140">
              다양한 오프라인 기획 경험으로
              <br />
              전략적인 생물 솔루션을 제공합니다.
            </h3>
            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="다음 슬라이드"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <div className="flex gap-[20px] pl-5">
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
