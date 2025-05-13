import Image from "next/image";
import Button from "../Button";

export default function Contact() {
  return (
    <section className="relative w-full h-[564px] overflow-hidden">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
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
      <div className="absolute inset-0 mx-auto max-w-desktop h-full flex items-center px-4">
        <div>
          <h2 className="text-primary font-heading font-bold text-16 mb-[38px]">
            Contact us
          </h2>
          <h3 className="text-white text-36 font-bold leading-140 mb-[60px]">
            오프라인 브랜딩의 모든 것,
            <br />
            켈베로스가 앞장서겠습니다.
          </h3>
          <Button text="문의하기" />
        </div>
      </div>
    </section>
  );
}
