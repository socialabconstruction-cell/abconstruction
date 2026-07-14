import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ServiceAreas from "@/components/ServiceAreas";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Request a Construction Quote in Edmonton",
  description:
    "Get in touch with AB Construction Group for concrete, foundations, excavation, waterproofing, and aggregate supply across Greater Edmonton and Alberta. Request a quote today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <ContactSection
        topPadded
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        heading="Request a quote for your project."
        intro="Fill out the quote form with your project details and we'll respond with scope, schedule notes, and the next step for your site. For urgent work, call us directly."
      />

      <ServiceAreas
        eyebrow="Service Areas"
        heading="Construction crews across Greater Edmonton & beyond"
        intro="Based in Edmonton and working throughout the surrounding communities and across Alberta — from Red Deer and Leduc to Spruce Grove, Beaumont, Stony Plain, St. Albert, and Smoky Lake. Tell us where your project is and we'll confirm availability and timing."
      />
    </>
  );
}
