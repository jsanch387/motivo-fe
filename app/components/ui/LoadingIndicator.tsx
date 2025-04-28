"use client";

import { motion } from "framer-motion";

export default function LoadingIndicator() {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center space-y-4">
      {/* Dots Animation */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-blue-500"
            animate={{ y: ["0%", "-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-white text-lg font-semibold">Building your kit...</p>
        <p className="text-gray-400 text-sm mt-1">
          This may take a moment. Hang tight!
        </p>
      </div>
    </div>
  );
}
