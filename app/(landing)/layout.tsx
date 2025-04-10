// app/layout.tsx

import { Urbanist } from "next/font/google";
import Navbar from "../components/navigation/NavBar";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AuthInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
