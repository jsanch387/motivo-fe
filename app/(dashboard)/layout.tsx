import { Urbanist } from "next/font/google";
import SideNav from "@/app/components/navigation/SideNav";
import DashboardMobileNav from "../components/navigation/DashboardMobileNav";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* Mobile Navigation */}
        <DashboardMobileNav />

        {/* Desktop Sidebar */}
        <div className="hidden md:flex min-h-screen">
          <SideNav />
          <main className="ml-64 w-full p-6">
            {children} <Analytics />
          </main>
        </div>

        {/* Mobile Content */}
        <div className="block md:hidden">
          {children} <Analytics />
        </div>
      </body>
    </html>
  );
}
