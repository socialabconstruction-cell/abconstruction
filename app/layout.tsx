import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "ZEAJ2dk6dpoSJlYbeqln6lL6SMo9Re4nsdR6Y3bc548",
  },
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

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Z3HPETZXP"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1Z3HPETZXP');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "y9jcvzpf5c");`}
        </Script>
      </body>
    </html>
  );
}
