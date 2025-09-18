import { Building2, Users, Briefcase, Shield, Wrench, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Pengelolaan Gedung",
      description: "Layanan manajemen fasilitas untuk menjaga operasional gedung tetap optimal"
    },
    {
      icon: Briefcase,
      title: "Sewa Ruang Perkantoran",
      description: "Ruang kantor siap pakai dengan fasilitas modern di lokasi strategis"
    },
    {
      icon: Users,
      title: "Ruang Serbaguna / Event",
      description: "Penyewaan ruang untuk acara bisnis, seminar, pelatihan, atau pameran"
    },
    {
      icon: Shield,
      title: "Keamanan & Proteksi Gedung",
      description: "Sistem keamanan 24/7 untuk melindungi aset dan pengguna gedung"
    },
    {
      icon: Wrench,
      title: "Pemeliharaan & Perawatan",
      description: "Menjaga semua fasilitas gedung tetap dalam kondisi prima"
    },
    {
      icon: Headphones,
      title: "Layanan Tenant",
      description: "Dukungan penuh untuk kebutuhan dan kenyamanan para penyewa"
    }
  ];

  return (
    <section id="services" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Layanan 
            <span> Unggulan Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan profesional yang dirancang khusus untuk 
            memenuhi kebutuhan bisnis modern dengan standar kualitas tertinggi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="gradient-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="gradient-primary p-4 rounded-lg inline-flex mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>



              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
<div className="text-center animate-fade-in">
  <Button
    variant="cta"
    size="lg"
    className="group"
    onClick={() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Hubungi Kami
  </Button>
</div>

      </div>
    </section>
  );
};

export default ServicesSection;