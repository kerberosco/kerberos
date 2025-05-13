import { Card, AboutCardContent } from "../Card";
import FadeInUp from "../animations/FadeInUp";

export default function AboutUs() {
  return (
    <section className="w-full py-[150px]" id="about-us">
      <div className="mx-auto max-w-desktop px-[30px]">
        <FadeInUp>
          <h2 className="text-primary font-bold text-16 mb-[38px]">About us</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="text-white text-36 font-bold mb-[74px] leading-140 tracking-tight-2">
            <h1>
              오프라인 브랜딩의 모든 것,
              <br />
              켈베로스
            </h1>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-2 gap-5">
          <FadeInUp delay={0.4}>
            <Card
              variant="about"
              imageSrc="/sections/about/pop-up-store-icon.png"
              imageAlt="팝업스토어 아이콘"
            >
              <AboutCardContent
                title="팝업스토어 기획"
                description="오프라인 팝업스토어 기획 및 운영"
              />
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <Card
              variant="about"
              imageSrc="/sections/about/exhibition-manage-icon.png"
              imageAlt="전시/박람회 아이콘"
            >
              <AboutCardContent
                title="전시/박람회 운영"
                description="각종 전시 및 박람회 운영 기획"
              />
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <Card
              variant="about"
              imageSrc="/sections/about/promotion-icon.png"
              imageAlt="홍보 아이콘"
            >
              <AboutCardContent
                title="오프라인 홍보 기획"
                description="오프라인 홍보 기획 및 활동 계획"
              />
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.7}>
            <Card
              variant="about"
              imageSrc="/sections/about/feedback-report-icon.png"
              imageAlt="리포트 아이콘"
            >
              <AboutCardContent
                title="사후 피드백 및 리포트"
                description="사후 피드백 및 리포트 제공"
              />
            </Card>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
