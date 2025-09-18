import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Indocement Tower",
        "Jl. Jend. Sudirman Kav. 70-71",
        "Jakarta Selatan 12910, Indonesia"
      ]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["(021) 5703798"]
    },
    /*{
      icon: Mail,
      title: "Email",
      details: [
        "xxx@xxxxxxxxx.co.id",
      ]
    }, */

    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Hubungi <span className=""> Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap membantu Anda mencapai tujuan bisnis. Mari diskusikan kebutuhan
            Anda dengan tim ahli kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="gradient-card p-8 rounded-xl shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Kirim Pesan
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Nama Lengkap
                    </label>
                    <Input
                      placeholder="Masukkan nama Anda"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Perusahaan
                    </label>
                    <Input
                      placeholder="Nama perusahaan"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Telepon
                    </label>
                    <Input
                      placeholder="+62 xxx xxxx xxxx"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Subjek
                  </label>
                  <Input
                    placeholder="Subjek pesan Anda"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Pesan
                  </label>
                  <Textarea
                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="gradient-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="gradient-primary p-3 rounded-lg shadow-glow">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="mt-8 gradient-card p-6 rounded-xl shadow-card">
              <h4 className="font-semibold text-lg mb-4 text-foreground">
                Lokasi Kami
              </h4>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.441885831738!2d106.82054007355404!3d-6.205295660782706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41cdd7af3cb%3A0x1e84fa682c6f4c3f!2sPT%20Serasi%20Tunggal%20Mandiri!5e0!3m2!1sid!2sid!4v1757647494761!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
