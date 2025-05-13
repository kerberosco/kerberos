import Image from "next/image";
import FadeInUp from "../animations/FadeInUp";

const PARTNER_ITEMS = [
  {
    name: "스타필드",
    logo: "/partners/starfield-logo.png",
  },
  {
    name: "유림",
    logo: "/partners/yuarim-logo.png",
  },
  {
    name: "한국산업미래연구원",
    logo: "/partners/kimr-logo.png",
  },
  {
    name: "코코하",
    logo: "/partners/kokohaa-logo.png",
  },
  {
    name: "농심",
    logo: "/partners/nongshim-logo.png",
  },
  {
    name: "이지푸드글로벌",
    logo: "/partners/easyfood-global-logo.png",
  },
  {
    name: "셀롱디저트",
    logo: "/partners/selong-dessert-logo.png",
  },
  {
    name: "길스토리",
    logo: "/partners/gilstory-logo.png",
  },
  {
    name: "서울딸기축제",
    logo: "/partners/seoul-strawberry-festa-logo.png",
  },
  {
    name: "나따오비까",
    logo: "/partners/nattaobica-logo.png",
  },
  {
    name: "매직스트로베리",
    logo: "/partners/magic-strawberry-logo.png",
  },
  {
    name: "에이빙뉴스네트워크",
    logo: "/partners/aving-news-network-logo.png",
  },
];

export default function Partners() {
  return (
    <section
      className="w-full bg-black pb-[150px] tracking-tight-2"
      id="partners"
    >
      <div className="w-full max-w-desktop mx-auto px-[30px] text-center md:text-left">
        <FadeInUp>
          <h2 className="text-primary font-heading font-bold text-16 mb-[38px]">
            Partners
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <h3 className="text-white text-36 font-bold leading-140 mb-[74px]">
            켈베로스와 함께 성장하는
            <br />
            주요 파트너사를 소개합니다.
          </h3>
        </FadeInUp>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-[18px] gap-y-[16px] justify-items-center">
            {PARTNER_ITEMS.map((partner, index) => (
              <FadeInUp key={partner.name} delay={0.3 + index * 0.1}>
                <div className="bg-white rounded-4 w-[180px] h-[100px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} 로고`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
