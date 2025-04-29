"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { useAuthStore } from "../../features/Authentication/store/useAuthStore";
import { ROUTES } from "@/lib/constants/routes";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/mento-logo.png" // <-- Update this path
                alt="Motivo Logo"
                width={70} // <-- Set width and height manually
                height={70}
                priority // <-- Optional: loads it faster (good for logo)
              />
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
              <Button href={ROUTES.DASHBOARD} type="primary" size="sm">
                Dashboard
              </Button>
            ) : (
              <>
                <Link
                  href={ROUTES.LOGIN}
                  className="text-md text-gray-300 hover:text-blue-400 transition"
                >
                  Log in
                </Link>
                <Button href={ROUTES.SIGNUP} type="primary" size="sm">
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
