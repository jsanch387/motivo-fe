"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "@/app/features/Authentication/store/useAuthStore";
import { ROUTES } from "@/lib/constants/routes";
import Button from "../ui/Button";
import Image from "next/image";

export default function LandingMobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuthStore((s) => s.user);

  return (
    <>
      {/* Top Nav Bar */}
      <nav className="flex items-center justify-between px-4  bg-zinc-900 border-b border-zinc-800 md:hidden">
        <Link href="/" className="flex items-center">
          <Image
            src="/mento-logo.png" // <-- Update this path
            alt="Motivo Logo"
            width={50} // <-- Set width and height manually
            height={50}
            priority // <-- Optional: loads it faster (good for logo)
          />
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-gray-300 hover:text-white"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Slide-in Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900 backdrop-blur-md md:hidden overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4  border-b border-zinc-800">
            <Link href="/" className="flex items-center">
              <Image
                src="/mento-logo.png" // <-- Update this path
                alt="Motivo Logo"
                width={50} // <-- Set width and height manually
                height={50}
                priority // <-- Optional: loads it faster (good for logo)
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-gray-300 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col px-6 py-8 gap-6">
            {/* Nav Links */}
            <nav className="flex flex-col gap-5 text-base text-gray-300">
              <Link
                href={ROUTES.HOME}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href={ROUTES.ABOUT}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                About
              </Link>
              <Link
                href={ROUTES.BLOGS}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Blogs
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col gap-4">
              {user ? (
                <Button
                  href={ROUTES.DASHBOARD}
                  type="primary"
                  size="md"
                  className="w-full"
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    href={ROUTES.LOGIN}
                    type="primary"
                    size="md"
                    className="w-full"
                  >
                    Log in
                  </Button>
                  <Button
                    href={ROUTES.SIGNUP}
                    type="secondary"
                    size="md"
                    className="w-full"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
