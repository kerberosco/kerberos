import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full text-footer-text py-[60px]">
      <div className="mx-auto max-w-desktop flex flex-col gap-10 px-4">
        <div className="relative">
          <Image
            src="/common/kerberos-logo.png"
            alt="KERBEROS 로고"
            width={180}
            height={29}
            priority
          />
        </div>
        <div className="flex items-center justify-between h-full font-bold tracking-tight-2 text-16">
          <div className="flex flex-col leading-140">
            <p>
              주식회사 켈베로스 <span className="mx-1">|</span> 대표이사: 유승
            </p>
            <p>
              대표번호: 031-340-3939 <span className="mx-1">|</span> 이메일:
              corp.kerberos@gmail.com
            </p>
            <p>경기도 안양시 동안구 엘에스로 92</p>
          </div>

          <p className="self-end">&copy; KERBEROS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
