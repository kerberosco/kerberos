"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full md:relative fixed top-0 left-0 h-[70px] md:h-[90px] bg-black z-50">
      <div className="mx-auto max-w-desktop px-5 sm:px-[30px] h-full flex items-center justify-between">
        <div className="relative">
          <Image
            src="/common/kerberos-logo.png"
            alt="KERBEROS logo"
            width={140}
            height={22}
            className="md:w-[180px] md:h-[29px]"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-white text-16 gap-[60px] tracking-tight-2">
          <button
            className="nav-button hover:text-primary transition-colors"
            onClick={() => scrollToSection("about-us")}
          >
            회사소개
          </button>
          <button
            className="nav-button hover:text-primary transition-colors"
            onClick={() => scrollToSection("portfolio")}
          >
            포트폴리오
          </button>
          <button
            className="nav-button hover:text-primary transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            문의하기
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 relative flex items-center justify-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`absolute h-[1.5px] w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[70px] left-0 w-full bg-black border-t border-white/10 md:hidden"
            >
              <nav className="flex flex-col text-white text-16 tracking-tight-2">
                <button
                  className="py-4 px-5 hover:bg-white/5 text-left"
                  onClick={() => scrollToSection("about-us")}
                >
                  회사소개
                </button>
                <button
                  className="py-4 px-5 hover:bg-white/5 text-left"
                  onClick={() => scrollToSection("portfolio")}
                >
                  포트폴리오
                </button>
                <button
                  className="py-4 px-5 hover:bg-white/5 text-left"
                  onClick={() => scrollToSection("contact")}
                >
                  문의하기
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
