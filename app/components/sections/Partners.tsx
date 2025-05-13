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
      className="w-full bg-black pb-[80px] sm:pb-[100px] md:pb-[150px] tracking-tight-2"
      id="partners"
    >
      <div className="w-full max-w-desktop mx-auto px-5 sm:px-[30px] text-center md:text-left">
        <FadeInUp>
          <h2 className="text-primary font-heading font-bold text-14 sm:text-16 mb-[20px] sm:mb-[30px] md:mb-[38px]">
            Partners
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <h3 className="text-white text-24 sm:text-28 md:text-36 font-bold leading-140 mb-[40px] sm:mb-[60px] md:mb-[74px]">
            켈베로스와 함께 성장하는
            <br />
            주요 파트너사를 소개합니다.
          </h3>
        </FadeInUp>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-[10px] sm:gap-x-[18px] gap-y-[10px] sm:gap-y-[16px] justify-items-center">
            {PARTNER_ITEMS.map((partner, index) => (
              <FadeInUp key={partner.name} delay={0.3 + index * 0.1}>
                <div className="bg-white rounded-4 w-[140px] sm:w-[160px] md:w-[180px] h-[80px] sm:h-[90px] md:h-[100px] p-3 sm:p-4 flex items-center justify-center">
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
