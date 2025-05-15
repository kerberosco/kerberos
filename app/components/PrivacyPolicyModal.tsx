import ModalAnimation from "./animations/ModalAnimation";
import PrivacyPolicy from "./PrivacyPolicy";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <ModalAnimation isOpen={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#1A1A1A] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 flex justify-between items-center p-6 bg-[#1A1A1A] border-b border-white/10">
            <h2 className="text-xl font-bold text-white">개인정보처리방침</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
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
          <div className="p-6">
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </ModalAnimation>
  );
}
