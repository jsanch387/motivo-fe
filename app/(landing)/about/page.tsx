import { Metadata } from "next";
import About from "../../features/landing/About/About";

export const metadata: Metadata = {
  title: "About Us ",
  description:
    "Learn how Motivo helps entrepreneurs start any business faster with tools for branding and marketing.",
};

export default function AboutPage() {
  return <About />;
}
