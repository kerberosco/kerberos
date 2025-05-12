import Image from "next/image";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[750px] max-h-[750px] overflow-hidden">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        <Image
          src="/common/banners/slogan-challenge-banner.jpg"
          alt="켈베로스 메인 배너 이미지"
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          className="object-cover"
        />
      </div>
      {/* bg-black/50  => banner를 좀더 어둡게 */}
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 mx-auto max-w-desktop h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-primary font-heading font-bold mb-5 text-[50px] tracking-tight-2">
          &ldquo;CHALLENGE EVERYTHING&rdquo;
        </h1>

        <article className="text-white font-normal leading-150 mb-[60px] text-xl">
          <p>브랜드의 영원한 파트너, 켈베로스가 함께합니다.</p>
          <p>
            오프라인 팝업, 전시, 박람회를 중심으로 브랜드의 경험을 기획하고
            실행하는
          </p>
          <p>MICE 기반 마케팅 그룹, (주)켈베로스입니다.</p>
        </article>

        <Button text="포트폴리오 보기" />
      </div>
    </section>
  );
}
