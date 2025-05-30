"use client";

import { useState } from "react";
import Image from "next/image";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <footer className="w-full text-footer-text py-[40px] sm:py-[50px] md:py-[60px] bg-black">
      <div className="mx-auto max-w-desktop flex flex-col gap-6 sm:gap-8 md:gap-10 px-5 sm:px-[30px]">
        <div className="relative">
          <Image
            src="/common/kerberos-logo.png"
            alt="KERBEROS 로고"
            width={140}
            height={22}
            className="md:w-[180px] md:h-[29px]"
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full tracking-tight-2 text-14 sm:text-15 md:text-16">
          <div className="flex flex-col leading-150 md:leading-140 mb-6 md:mb-0 gap-1 md:gap-0">
            <p className="mb-0 md:mb-0">
              주식회사 켈베로스 <span className="mx-1">|</span> 대표이사: 유승
            </p>
            <div className="flex md:hidden flex-col gap-1">
              <p>대표번호: 031-340-3939</p>
              <p>이메일: corp.kerberos@gmail.com</p>
            </div>
            <div className="hidden md:block">
              <p>
                대표번호: 031-340-3939 <span className="mx-1">|</span> 이메일:
                corp.kerberos@gmail.com
              </p>
            </div>
            <p className="mt-0 md:mt-0">경기도 안양시 동안구 엘에스로 92</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setIsPrivacyPolicyOpen(true)}
              className="text-white/60 hover:text-white transition-colors text-12 sm:text-14 md:text-16"
            >
              개인정보처리방침
            </button>
            <p className="text-12 sm:text-14 md:text-16 text-white/50">
              &copy; KERBEROS. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </footer>
  );
}
