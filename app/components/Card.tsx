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
        variant === "about" && "bg-card px-[60px] py-[55px] rounded-8",
        variant === "why" && [
          "gap-[74px] px-[60px] py-[52px] rounded-12",
          className,
        ],
        imagePosition === "right" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={clsx(
          "text-white flex flex-col tracking-tight-2 flex-1",
          variant === "about" && "gap-[25px]"
        )}
      >
        {children}
      </div>
      <div className={clsx("relative", imageSize)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
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
      <h4 className="text-white text-24 font-bold">{title}</h4>
      <p className="text-white/90 text-18 font-normal">{description}</p>
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
      <h4 className="text-36 font-bold leading-130 mb-[19px]">{title}</h4>
      <h5 className="text-24 font-normal leading-130">{subtitle}</h5>
      <p className="text-18 font-normal leading-150 mt-[13px] whitespace-pre-wrap break-keep">
        {content}
      </p>
    </>
  );
}
