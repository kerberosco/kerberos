import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[90px]">
      <div className="mx-auto max-w-desktop px-8 h-full flex items-center justify-between">
        <div className="relative">
          <Image
            src="/common/kerberos-logo.png"
            alt="KERBEROS logo"
            width={180}
            height={29}
            priority
          />
        </div>

        <nav className="flex items-center text-white text-16 gap-[60px] tracking-tight-2">
          <button className="nav-button">회사소개</button>
          <button className="nav-button">포트폴리오</button>
          <button className="nav-button">문의하기</button>
        </nav>
      </div>
    </header>
  );
}
