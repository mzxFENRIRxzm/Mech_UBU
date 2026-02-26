import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import CarsPreview from "@/components/CarsPreview";
import Timeline from "@/components/Timeline";
import JoinCTA from "@/components/JoinCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutPreview />
      <div className="section-divider" />
      <ProjectsPreview />
      <div className="section-divider" />
      <CarsPreview />
      <Timeline />
      <div className="section-divider" />
      <JoinCTA />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
