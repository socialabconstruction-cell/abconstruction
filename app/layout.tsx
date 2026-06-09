import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abconstructiongroup.ca"),
  title: {
    default: "AB Construction Group | Edmonton Concrete, Foundations & Excavation",
    template: "%s | AB Construction Group",
  },
  description:
    "Edmonton's trusted construction partner for concrete pumping, footings and foundation walls, cribbing and forming, waterproofing, aggregate supply, and excavation services across Alberta.",
  keywords: [
    "Concrete Pumping Edmonton",
    "Foundation Contractor Edmonton",
    "Weeping Tile Installation Edmonton",
    "Gravel Delivery Edmonton",
    "Waterproofing Contractor Edmonton",
    "Excavation Services Edmonton",
    "Concrete Forming Edmonton",
    "Aggregate Supply Edmonton",
  ],
  openGraph: {
    title: "AB Construction Group",
    description:
      "Foundations, concrete, excavation, and aggregate supply across Edmonton & Alberta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
