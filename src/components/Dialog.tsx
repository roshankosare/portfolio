import React, { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable page scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable page scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }} // Start hidden
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out
        >
          {/* Background Blur Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Dialog Box */}
          <motion.div
            className="relative bg-neutral-800 p-4 rounded-xl shadow-sm w-[90%] max-w-[900px] h-[600px] text-white flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 30 }} // Start small & slightly down
            animate={{ opacity: 1, scale: 1, y: 0 }} // Grow & move into place
            exit={{ opacity: 0, scale: 0.9, y: 30 }} // Shrink & fade out smoothly
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-4 font-extrabold bg-black px-2 rounded-full cursor-pointer"
            >
              X
            </button>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
