"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sideNavLinks } from "./SideNavLinks";
import { cn } from "../../utils/utils";
import { PowerIcon } from "@heroicons/react/24/outline"; // 🧠 Import the logout icon
import { logout } from "@/lib/supabase/client"; // 🔐 Adjust based on your setup

export default function SideNav() {
  const pathname = usePathname();

  const handleLogout = async () => {
    const error = await logout();
    if (error) {
      console.error("Logout failed:", error.message);
    } else {
      window.location.href = "/login"; // or router.push("/login") if using next/router
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900 border-r border-zinc-800 shadow-md flex flex-col justify-between">
      {/* Top: Logo + Nav */}
      <div>
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
                  "px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2",
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
      </div>

      {/* Bottom: Logout */}
      <div className="px-4 py-6 mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition px-4 py-2 rounded-md hover:bg-[rgba(255,255,255,0.05)] cursor-pointer"
        >
          <PowerIcon className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
