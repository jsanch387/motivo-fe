import type { ReactNode } from "react";
import "../globals.css";
import Background from "../components/ui/Background";
import { Analytics } from "@vercel/analytics/react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-10 py-12 sm:py-20">
          {/* Background Glow */}
          <Background />

          {/* Card wraps here */}
          <div className="flex w-full max-w-md flex-col">
            {children} <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
