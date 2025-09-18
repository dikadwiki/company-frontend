import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import stmLogo from "@/assets/stm.jpg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#services", label: "Layanan" },
    { href: "#department", label: "Department" },
    { href: "#contact", label: "Kontak" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
{/* Logo */}
<div className="flex-shrink-0">
  <img
    src={stmLogo}
    alt="STM Logo"
    className="h-10 w-auto object-contain cursor-pointer"
    onClick={() => {
      const heroSection = document.getElementById("home");
      heroSection?.scrollIntoView({ behavior: "smooth" });
    }}
  />
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/10"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 hover:bg-primary/10"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
