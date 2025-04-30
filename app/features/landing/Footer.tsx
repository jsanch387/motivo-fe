"use client";

import { ROUTES } from "@/lib/constants/routes";
import { VARIABLES } from "@/lib/constants/variables";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgba(16,22,34,0.95)] border-t border-gray-800 text-[color:var(--foreground)] px-6 sm:px-10 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
        {/* Branding */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Motivo
          </h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Helping you launch your side hustle — fast, smart, and stress-free.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href={ROUTES.DASHBOARD}
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.BLOGS}
                className="hover:text-blue-400 transition"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href={ROUTES.TERMS}
                className="hover:text-blue-400 transition"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PRIVACY}
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="mailto:app.motivo@gmail.com"
                className="hover:text-blue-400 transition"
              >
                {VARIABLES.EMAIL}
              </a>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT}
                className="hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Motivo. All rights reserved.
      </div>
    </footer>
  );
}
