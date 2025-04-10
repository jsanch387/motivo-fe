"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { useAuthStore } from "../../features/Authentication/store/useAuthStore";

export default function Navbar() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user); // ← grab user from store

  return (
    <nav className="backdrop-blur-md bg-[rgba(16,22,34,0.8)] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Motivo
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" pathname={pathname} />
            <NavLink href="/about" label="About" pathname={pathname} />
            {user && (
              <NavLink href="/blogs" label="Blogs" pathname={pathname} />
            )}
          </div>

          {/* Right side auth buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button href="/dashboard" type="primary" size="sm">
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-md text-gray-300 hover:text-blue-400 transition"
                >
                  Log in
                </Link>
                <Button href="/signup" type="primary" size="sm">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-md font-medium transition ${
        isActive ? "text-white" : "text-gray-400 hover:text-blue-400"
      }`}
    >
      {label}
    </Link>
  );
}
