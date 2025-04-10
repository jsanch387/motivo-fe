import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-10 py-12 sm:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700 opacity-30 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-30 blur-2xl rounded-full transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Card wraps here */}
      <div className="flex w-full max-w-md flex-col">{children}</div>
    </div>
  );
}
