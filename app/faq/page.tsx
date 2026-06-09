import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import FAQSection, { FAQS } from "@/components/FAQSection";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ — Edmonton Construction Questions Answered",
  description:
    "Answers to common questions about AB Construction Group's services, service area, timelines, full-site packages, and what we need to quote your project in Edmonton & Alberta.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="FAQ"
        title="Straight answers"
        highlight="before work begins."
        description="Quick answers about scope, timelines, service areas, and the details that help us price your project clearly. Still have a question? We're always happy to talk it through."
        bullets={[
          "Service area & coverage",
          "Full-site packages",
          "Timelines & scheduling",
          "What we need to quote",
        ]}
        image="/images/stock/excavator-groundwork.jpg"
        imageAlt="Excavation work prepared for foundation drainage"
        badge="Good to Know"
        secondary={{ label: "Our Services", href: "/services" }}
      />

      <FAQSection />

      <ServiceAreas
        eyebrow="Coverage"
        heading="Where AB Construction Group works"
        intro="One of the questions we get asked most is where we work. We're based in Edmonton and serve the entire Greater Edmonton Area, with crews available for projects across Alberta depending on scope and schedule."
      />

      <CtaBand
        eyebrow="Still Have Questions?"
        title="Let's talk through"
        highlight="your project."
        body="Tell us what you're planning and we'll answer your questions with a clear scope and an honest timeline."
      />
    </>
  );
}
