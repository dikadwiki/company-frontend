import { Card, CardContent } from "@/components/ui/card";
import { Building, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import bld2Image from "@/assets/logo.png";  // Import gambar dari assets

const AboutSection = () => {
  const [showFullVision, setShowFullVision] = useState(false);

  return (
    <section
      id="tentang"
      className="relative py-20 bg-corporate-gray-light overflow-hidden"
      style={{
        backgroundImage: `url(${bld2Image})`, // Set gambar sebagai background untuk seluruh section
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background animasi */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #e0e7ff, #f3f4f6)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #e0e7ff, #f3f4f6)",
            "linear-gradient(135deg, #f3f4f6, #e0e7ff)",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Bentuk blur melayang */}
      <motion.div
        className="absolute top-10 left-10 w-36 h-36 rounded-full bg-blue-200/20 blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-48 h-48 rounded-full bg-purple-200/20 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Ikon kecil melayang */}
      <motion.div
        className="absolute top-1/3 left-5 text-blue-300 opacity-20"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <Building className="h-5 w-5" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-purple-300 opacity-20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      >
        <Target className="h-5 w-5" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Tentang Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PT. Serasi Tunggal Mandiri adalah perusahaan terpercaya dalam bidang
            manajemen gedung dengan pengalaman bertahun-tahun melayani berbagai
            jenis properti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sejarah */}
          <div className="animate-slideInLeft space-y-4 relative">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-primary mb-6">Sejarah Perusahaan</h3>
              <p className="text-xl leading-relaxed text-muted-foreground mb-4">
                Didirikan dengan komitmen untuk memberikan layanan manajemen gedung
                terbaik, PT. Serasi Tunggal Mandiri telah berkembang menjadi salah
                satu penyedia layanan terpercaya di Indonesia.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mb-4">
                Dengan tim profesional yang berpengalaman dan teknologi terkini,
                kami telah menangani berbagai proyek dari gedung perkantoran, apartemen,
                hingga kompleks perbelanjaan dengan standar kualitas tinggi.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Kepercayaan klien dan kepuasan pelanggan adalah prioritas utama kami
                dalam setiap layanan yang diberikan.
              </p>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="space-y-8">
            {/* Visi */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <Card className="card-corporate shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
                  <p className="text-muted-foreground text-justify px-4">
                    {showFullVision ? (
                      <>
                        Untuk menghadapi perkembangan dan kemajuan zaman yang demikian pesat,
                        <strong>
                          <span className="ml-5">PT. SERASI TUNGGAL MANDIRI</span>
                        </strong> telah mencanangkan visi
                        <strong> “Terwujudnya Pengelolaan Gedung Wisma Indocement sebagai ONE STOP BUILDING”</strong>
                        yang menjadi pusat perkantoran, bisnis, kegiatan, informasi serta usaha produktif lainnya
                        yang memberi manfaat bagi masyarakat dan Negara serta menjadi Perusahaan Penyedia
                        Jasa Pengelola Gedung yang handal dan terpercaya.
                      </>
                    ) : (
                      <>Untuk menghadapi perkembangan dan kemajuan zaman yang demikian pesat...</>
                    )}
                  </p>
                  <button
                    onClick={() => setShowFullVision(!showFullVision)}
                    className="mt-3 text-primary underline text-sm"
                  >
                    {showFullVision ? "Sembunyikan" : "Lihat Selengkapnya"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Misi */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <Card className="card-corporate shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
                  <ul className="text-muted-foreground space-y-2 text-left list-disc list-inside">
                    <li>Memberikan Kenyamanan dan Kepuasan Tenant (Penyewa Gedung).</li>
                    <li>Berperan serta dalam kegiatan usaha pengelola gedung yang profesional dan dapat dipercaya.</li>
                    <li>Mengusahakan pemanfaatan fasilitas gedung untuk menunjang kegiatan para Penyewa Gedung.</li>
                    <li>Mengoptimalkan ruang-ruang kosong sehingga dapat diperoleh pendapatan (income).</li>
                    <li>Mengusahakan pelayanan yang inovatif agar kesinambungan Penyewa dapat terjamin.</li>
                    <li>Mengusahakan pemanfaatan gedung untuk usaha dan kegiatan produktif secara berkelanjutan.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
