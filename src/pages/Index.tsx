import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DepartmentSection from "@/components/DepartmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ActivitiesSection from "../components/ActivitiesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <DepartmentSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
