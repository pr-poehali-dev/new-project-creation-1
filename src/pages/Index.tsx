import SiteHeader from "@/components/landing/SiteHeader";
import HeroSection from "@/components/landing/HeroSection";
import InfoSections from "@/components/landing/InfoSections";
import PaymentSteps from "@/components/landing/PaymentSteps";
import OsagoSection from "@/components/landing/OsagoSection";
import ScheduleUrgent from "@/components/landing/ScheduleUrgent";
import ContactsMap from "@/components/landing/ContactsMap";
import ContactFooter from "@/components/landing/ContactFooter";
import CallbackButton from "@/components/landing/CallbackButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <SiteHeader />
      <HeroSection />
      <InfoSections />
      <PaymentSteps />
      <OsagoSection />
      <ScheduleUrgent />
      <ContactsMap />
      <ContactFooter />
      <CallbackButton />
    </div>
  );
}
