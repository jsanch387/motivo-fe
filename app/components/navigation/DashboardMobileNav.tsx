"use client";

import { useState } from "react";
import Link from "next/link";
import { XMarkIcon, Bars3Icon, PowerIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { sideNavLinks } from "./SideNavLinks";
import { logout } from "@/lib/supabase/client";
import { cn } from "@/app/utils/utils";

export default function DashboardMobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = async () => {
    const error = await logout();
    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <>
      {/* Top bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-zinc-900 border-b border-zinc-800 md:hidden">
        <Link
          href="/dashboard"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Motivo
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-gray-300 hover:text-white"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900 backdrop-blur-md md:hidden">
          <div className="flex justify-between items-center px-4 py-4 border-b border-zinc-800">
            <Link
              href="/dashboard"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Motivo
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 pt-10 gap-6 text-lg">
            {sideNavLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-md text-sm font-medium transition",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
                      : "text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-8 w-full flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition px-4 py-2 rounded-md hover:bg-[rgba(255,255,255,0.05)]"
            >
              <PowerIcon className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
