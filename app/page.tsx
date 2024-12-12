import Image from "next/image";
import { HeroSection } from "./components/sections/hero";
import { ServicesSection } from "./components/sections/services";
import { ExperienceSection } from "./components/sections/experience";
import { ContactSection } from "./components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
