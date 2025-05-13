import Image from "next/image";
import Button from "../Button";
import FadeInUp from "../animations/FadeInUp";

export default function MainVisual() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden mt-[70px] md:mt-0">
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
      <div className="absolute inset-0 mx-auto max-w-desktop h-full flex flex-col items-center justify-center text-center px-5 sm:px-[30px]">
        <FadeInUp delay={0.2}>
          <h1 className="text-primary font-heading font-bold mb-5 text-[32px] sm:text-[40px] md:text-[50px] tracking-tight-2">
            &ldquo;CHALLENGE EVERYTHING&rdquo;
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <article className="text-white font-normal leading-150 mb-[40px] sm:mb-[60px] text-base sm:text-lg md:text-xl">
            <p>브랜드의 영원한 파트너, 켈베로스가 함께합니다.</p>
            <p className="mt-2">
              오프라인 팝업, 전시, 박람회를 중심으로 브랜드의 경험을 기획하고
              실행하는
            </p>
            <p className="mt-2">MICE 기반 마케팅 그룹, (주)켈베로스입니다.</p>
          </article>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <Button text="포트폴리오 보기" />
        </FadeInUp>
      </div>
    </section>
  );
}
