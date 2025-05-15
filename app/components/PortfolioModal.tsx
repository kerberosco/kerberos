import Image from "next/image";
import { useModalStore } from "../store/modalStore";
import ModalAnimation from "./animations/ModalAnimation";

export default function PortfolioModal() {
  const { isOpen, imageData, closeModal } = useModalStore();

  if (!imageData) return null;

  return (
    <ModalAnimation isOpen={isOpen} onClose={closeModal}>
      <div className="relative rounded-20 p-6 sm:p-8 w-[90vw] max-w-[1200px] max-h-[90vh]">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={imageData.imageSrc}
            alt={imageData.imageAlt}
            fill
            className="object-contain rounded-12"
            quality={100}
          />
          <button
            className="absolute -top-12 right-0 text-white hover:text-primary"
            onClick={closeModal}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </ModalAnimation>
  );
}
