import Image from "next/image";
import { useModalStore } from "../store/modalStore";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  createdAt: string;
  partner: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PortfolioCard({
  title,
  subtitle,
  createdAt,
  partner,
  imageSrc,
  imageAlt,
}: PortfolioCardProps) {
  const openModal = useModalStore(
    (state: {
      openModal: (data: { imageSrc: string; imageAlt: string }) => void;
    }) => state.openModal
  );

  const handleImageClick = () => {
    openModal({
      imageSrc,
      imageAlt,
    });
  };

  return (
    <div className="flex-[0_0_280px] sm:flex-[0_0_380px] md:flex-[0_0_480px] min-w-0">
      <div
        className="relative w-[280px] sm:w-[380px] md:w-[480px] h-[210px] sm:h-[285px] md:h-[360px] mb-[20px] sm:mb-[30px] cursor-pointer group"
        onClick={handleImageClick}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-12 transition-transform duration-200 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-12 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-bold tracking-tight-2">
        <div className="flex items-center justify-between mb-[10px] sm:mb-[14px]">
          <h4 className="text-white text-18 sm:text-20 md:text-24">{title}</h4>
          <span className="text-white/80 text-[10px] sm:text-[12px] px-3 sm:px-4 py-[8px] sm:py-[10px] bg-portfolio-dark rounded-[60px]">
            {partner}
          </span>
        </div>
        <p className="text-white/90 text-14 sm:text-16 md:text-18 font-normal">
          {subtitle}
        </p>
        <span className="text-white/80 text-14 sm:text-16 pt-[20px] sm:pt-[30px]">
          {createdAt}
        </span>
      </div>
    </div>
  );
}
