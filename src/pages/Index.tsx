import SiteHeader from "@/components/landing/SiteHeader";
import HeroSection from "@/components/landing/HeroSection";
import InfoSections from "@/components/landing/InfoSections";
import OsagoSection from "@/components/landing/OsagoSection";
import ContactFooter from "@/components/landing/ContactFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection />
      <InfoSections />
      <OsagoSection />
      <ContactFooter />
    </div>
  );
}