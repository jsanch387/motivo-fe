"use client";

import { motion } from "framer-motion";

interface LoadingIndicatorProps {
  title?: string;
  subtitle?: string;
}

export default function LoadingIndicator({
  title,
  subtitle,
}: LoadingIndicatorProps) {
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

      {/* Optional Text */}
      {(title || subtitle) && (
        <div className="text-center">
          {title && <p className="text-white text-lg font-semibold">{title}</p>}
          {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
