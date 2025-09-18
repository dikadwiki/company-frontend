import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Visi & Misi", href: "#about" },
      { name: "Tim Kami", href: "#team" },
      { name: "Karir", href: "#" },
    ],
services: [
  { name: "Pengelolaan Gedung", href: "#services" },
  { name: "Manajemen Operasional", href: "#services" },
  { name: "Analisis Keuangan", href: "#services" },
  { name: "Compliance & Legal", href: "#services" },
  { name: "Inovasi & Teknologi", href: "#services" },
  { name: "Customer Support", href: "#services" }
],

    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "White Papers", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-950 to-purple-950 text-white
">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 ">
              PT. Serasi Tunggal Mandiri
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Mitra terpercaya dalam mengembangkan solusi bisnis yang inovatif dan 
              berkelanjutan. Kami berkomitmen memberikan layanan terbaik untuk 
              pertumbuhan bisnis Anda.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-11 w-11 text-primary-glow" />
                <span className="text-background/80 text-sm">
                  Wisma Indocement 17th Floor, Jl. Jend. Sudirman Kav. 70 - 71 Setiabudi, Setia Budi, RT.3/RW.3, Kuningan, Setia Budi, Setiabudi, South Jakarta City, Jakarta 12910
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80 text-sm">(021) 5703798</span>
              </div>
              {/*<div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80 text-sm">info@serasitunggalmandiri.co.id</span>
              </div> */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Sumber Daya</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section 
        <div className="border-t border-background/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold mb-2 text-background">Newsletter</h4>
              <p className="text-background/80 text-sm">
                Dapatkan update terbaru tentang insights bisnis dan layanan kami
              </p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <button className="px-6 py-2 gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-background/80 text-sm">
              © {currentYear}. All rights Reserved PT. Serasi Tunggal Mandiri.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-background/80 hover:text-primary-glow transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-background/10 hover:bg-primary hover:shadow-glow transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-background/80 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;