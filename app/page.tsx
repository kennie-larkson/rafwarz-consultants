import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/hero";
import { ServicesSection } from "./components/sections/services";
import { ExperienceSection } from "./components/sections/experience";
import { ContactSection } from "./components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
