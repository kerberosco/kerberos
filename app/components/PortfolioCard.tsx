import Image from "next/image";

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
  return (
    <div className="flex-[0_0_280px] sm:flex-[0_0_380px] md:flex-[0_0_480px] min-w-0">
      <div className="relative w-[280px] sm:w-[380px] md:w-[480px] h-[210px] sm:h-[285px] md:h-[360px] mb-[20px] sm:mb-[30px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-12"
        />
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
