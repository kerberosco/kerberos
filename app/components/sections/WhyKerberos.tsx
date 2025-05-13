import { Card, WhyCardContent } from "../Card";
import FadeInUp from "../animations/FadeInUp";

export default function WhyKerberos() {
  return (
    <section
      className="w-full bg-black py-[80px] md:py-[150px]"
      id="why-kerberos"
    >
      <div className="mx-auto max-w-desktop px-5 sm:px-[30px]">
        <FadeInUp>
          <h2 className="text-primary font-heading tracking-tight-2 font-bold text-14 sm:text-16 mb-[30px] sm:mb-[38px]">
            Why Kerberos?
          </h2>
        </FadeInUp>

        <div className="flex flex-col gap-[40px] sm:gap-[60px] md:gap-[80px]">
          {/* Offline Event */}
          <FadeInUp delay={0.2}>
            <Card
              variant="why"
              imageSrc="/sections/why-kerberos/offline-event.png"
              imageAlt="오프라인 이벤트 이미지"
              imagePosition="right"
              className="bg-primary"
            >
              {/* 다양한 전에 띄어쓰기 2개 있음 */}
              <WhyCardContent
                title="OFFLINE EVENT"
                subtitle="&ldquo;브랜드를 움직이는 현장, 켈베로스가 만듭니다&rdquo;"
                content="㈜켈베로스는 언제나 전략적이고 감각적인 기획과 정교한 실행을 통해, 클라이언트와 참여자 모두에게 몰입도 높은 브랜드 경험을 제공합니다.  다양한 현장 프로젝트를 통해 축적된 운영 노하우와 창의적인 공간 구성 역량은 켈베로스만의 강점입니다. 단순한 이벤트를 넘어, 브랜드의 가치를 선명하게 각인시키는 실질적이고 신뢰받는 경험을 설계합니다."
              />
            </Card>
          </FadeInUp>

          {/* Brand Connection */}
          <FadeInUp delay={0.4}>
            <Card
              variant="why"
              imageSrc="/sections/why-kerberos/brand-connection.png"
              imageAlt="브랜드 커넥션 이미지"
              imagePosition="left"
              className="flex-col sm:flex-row"
            >
              <WhyCardContent
                title="BRAND CONNECTION"
                subtitle="&ldquo;신뢰를 설계하는 기획, 관계를 만드는 현장&rdquo;"
                content="㈜켈베로스는 단순한 홍보를 넘어, 브랜드와 고객이 연결되는 본질적인 
접점을 기획합니다. 우리는 현장 속에서 사람과 브랜드가 자연스럽게
소통하고, 신뢰를 쌓아갈 수 있는 순간을 설계합니다. 모든 행사는 브랜드
이미지를 확장시키는 출발점이며, 켈베로스는 그 출발에 전략과 감각을
더합니다."
              />
            </Card>
          </FadeInUp>

          {/* Smart Finish */}
          <FadeInUp delay={0.6}>
            <Card
              variant="why"
              imageSrc="/sections/why-kerberos/smart-finish.png"
              imageAlt="스마트 피니시 이미지"
              imagePosition="right"
            >
              <WhyCardContent
                title="SMART FINISH"
                subtitle="&ldquo;ZERO to TEN 마무리까지&rdquo;"
                content={`AI 기반 분석 솔루션을 통해 오프라인 브랜드 이벤트 종료 후 
방문자 데이터, 행동 분석, 피드백 집계를 포함한 사후 마케팅 전 과정을
체계적으로 운영합니다.`}
              />
            </Card>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
