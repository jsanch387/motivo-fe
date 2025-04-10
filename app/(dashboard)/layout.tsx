import { Urbanist } from "next/font/google";
import SideNav from "@/app/components/navigation/SideNav";
import MobileNav from "@/app/components/navigation/MobileNav";
import "../globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "Dashboard | Motivo",
  description: "Your business command center",
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
        <MobileNav />

        {/* Desktop Sidebar */}
        <div className="hidden md:flex min-h-screen">
          <SideNav />
          <main className="ml-64 w-full p-6">{children}</main>
        </div>

        {/* Mobile Content */}
        <div className="block md:hidden">{children}</div>
      </body>
    </html>
  );
}
