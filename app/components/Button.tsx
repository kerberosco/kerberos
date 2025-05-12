"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="font-normal px-[26px] py-[16px] bg-primary rounded-[50px] text-white"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(255, 138, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      {text}
    </motion.button>
  );
}
