import React, { ReactNode, useEffect } from "react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      ></div>

      {/* Dialog Box */}
      <div className="relative bg-neutral-800 p-4 rounded-xl shadow-sm w-[90%] max-w-[900px] h-[600px] text-white flex flex-col">
        <button
          onClick={onClose}
          className=" absolute top-2 right-4 font-extrabold bg-black px-2  rounded-full cursor-pointer"
        >
          X
        </button>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
