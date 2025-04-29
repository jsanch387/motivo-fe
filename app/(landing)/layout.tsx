// app/(landing)/layout.tsx
import { Urbanist } from "next/font/google";
import Navbar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/LandingMobileNav";
import AuthInitializer from "../features/Authentication/AuthInitializer";
import Footer from "../features/landing/Footer";
import "../globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "Motivo",
  description: "Launch your business fast",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} min-h-screen flex flex-col bg-[var(--background)]`}
      >
        <AuthInitializer />

        {/* Mobile Nav: visible below md */}
        <MobileNav />

        {/* Desktop Nav: hidden below md */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
