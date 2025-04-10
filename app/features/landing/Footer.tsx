"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgba(16,22,34,0.95)] border-t border-gray-800 text-[color:var(--foreground)] px-6 sm:px-10 lg:px-20 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Motivo
          </h2>
          <p className="text-sm text-gray-400">
            Helping you launch your side hustle — fast, smart, and stress-free.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-blue-400 transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-400 transition">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/terms" className="hover:text-blue-400 transition">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400 transition">
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
                href="mailto:hello@motivo.app"
                className="hover:text-blue-400 transition"
              >
                hello@motivo.app
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
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
