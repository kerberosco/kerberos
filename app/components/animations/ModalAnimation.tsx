import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ModalAnimationProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAnimation({
  children,
  isOpen,
  onClose,
}: ModalAnimationProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              transition: {
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
