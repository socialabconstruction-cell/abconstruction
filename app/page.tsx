import Hero from "@/components/Hero";
import IntroSplit from "@/components/IntroSplit";
import MissionVision from "@/components/MissionVision";
import StatsBanner from "@/components/StatsBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import WhyUs from "@/components/WhyUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import FieldGallery from "@/components/FieldGallery";
import EdmontonSection from "@/components/EdmontonSection";
import TestimonialStrip from "@/components/TestimonialStrip";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSplit />
      <MissionVision />
      <StatsBanner />
      <ServicesGrid />
      <ProcessSection />
      <WhyUs />
      <ProjectShowcase />
      <FieldGallery />
      <EdmontonSection />
      <TestimonialStrip />
      <FAQSection />
      <ContactSection />
    </>
  );
}
