import clsx from "clsx";
import Image from "next/image";

interface CardProps {
  variant: "about" | "why";
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Card({
  variant,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  children,
  className,
}: CardProps) {
  const imageSize =
    variant === "about"
      ? "w-[90px] h-[90px]"
      : "w-[280px] md:w-[340px] lg:w-[420px] h-auto aspect-[420/262] flex-shrink-0";

  return (
    <div
      className={clsx(
        `flex items-center bg-card w-full`,
        variant === "about" && [
          "bg-card px-[20px] sm:px-[60px] py-[30px] sm:py-[55px] rounded-8",
          "justify-between",
        ],
        variant === "why" && [
          "gap-[30px] sm:gap-[74px] px-[20px] sm:px-[60px] py-[30px] sm:py-[52px] rounded-12",
          "flex-col sm:flex-row",
          imagePosition === "left" && "sm:flex-row-reverse",
          className,
        ]
      )}
    >
      <div
        className={clsx(
          "text-white flex flex-col tracking-tight-2",
          variant === "about" && "gap-[15px] sm:gap-[25px]",
          variant === "why" && [
            "flex-1",
            imagePosition === "right" ? "order-2 sm:order-1" : "order-1",
          ]
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          "relative",
          imageSize,
          variant === "why" && [
            imagePosition === "right"
              ? "order-1 sm:order-2"
              : "order-2 sm:order-1",
            "mx-auto sm:mx-0",
          ]
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-12"
          sizes="(max-width: 420px) 100vw, 420px"
        />
      </div>
    </div>
  );
}

export function AboutCardContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
        {title}
      </h4>
      <p className="text-white/80 text-base sm:text-lg md:text-xl font-normal">
        {description}
      </p>
    </>
  );
}

export function WhyCardContent({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: string;
}) {
  return (
    <>
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-130 mb-[19px] text-center sm:text-left">
        {title}
      </h4>
      <h5 className="text-16 sm:text-xl md:text-2xl font-normal leading-130 text-center sm:text-left text-white/90">
        {subtitle}
      </h5>
      <p className="text-sm sm:text-lg md:text-xl font-normal leading-150 mt-[13px] whitespace-pre-wrap break-keep text-center sm:text-left text-white/60">
        {content}
      </p>
    </>
  );
}
