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
    <div className="flex-[0_0_480px] min-w-0">
      <div className="relative w-[480px] h-[360px] mb-[30px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-12"
        />
      </div>
      <div className="flex flex-col font-bold tracking-tight-2">
        <div className="flex items-center justify-between">
          <h4 className="text-white text-24 pb-[14px]">{title}</h4>
          <span className="text-white/80 text-14 px-4 py-[10px] bg-portfolio-dark rounded-[60px]">
            {partner}
          </span>
        </div>

        <p className="text-white/90 text-18 font-normal">{subtitle}</p>
        <span className="text-white/80 text-16 pt-[30px]">{createdAt}</span>
      </div>
    </div>
  );
}
