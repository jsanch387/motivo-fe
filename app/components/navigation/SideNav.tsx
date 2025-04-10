"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sideNavLinks } from "./SideNavLinks";
import { cn } from "../../utils/utils";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[rgba(16,22,34,0.95)] border-r border-gray-800 backdrop-blur-xl shadow-xl">
      {/* Logo / Brand */}
      <div className="p-6 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Motivo
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 px-4">
        {sideNavLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition",
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm shadow-blue-500/20"
                  : "text-gray-400 hover:text-blue-400 hover:bg-[rgba(255,255,255,0.05)]"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
