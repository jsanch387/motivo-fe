"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { sideNavLinks } from "./SideNavLinks";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Nav Bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-[rgba(16,22,34,0.8)] border-b border-gray-800 backdrop-blur-md md:hidden">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Motivo
        </Link>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Slide-in Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(16,22,34,0.95)] backdrop-blur-md transition-all duration-300 md:hidden">
          {/* Top bar inside menu */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Motivo
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-gray-300 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 px-6 pt-10 text-lg">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {sideNavLinks.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
