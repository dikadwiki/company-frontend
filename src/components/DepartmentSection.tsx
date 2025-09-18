import { useState } from "react";
import { Building2, ArrowRight, X } from "lucide-react";
import stoImage from "../assets/sto.png";

const DepartmentSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const departments = [
    {
      name: "AF Department",
      description:
        "Mengelola keuangan, akuntansi, dan administrasi perusahaan untuk memastikan stabilitas dan pertumbuhan yang berkelanjutan.",
    },
    {
      name: "HR & GA Department",
      description:
        "Menangani pengelolaan sumber daya manusia, pengembangan karyawan, serta urusan umum perusahaan.",
    },
    {
      name: "Engineering Department",
      description:
        "Bertanggung jawab atas pemeliharaan, perbaikan, dan pengembangan fasilitas serta infrastruktur perusahaan.",
    },
    {
      name: "Security & Safety Department",
      description:
        "Menjamin keamanan, keselamatan kerja, dan perlindungan aset perusahaan melalui pengawasan ketat.",
    },
    {
      name: "HK & G Department",
      description:
        "Menangani kebersihan, housekeeping, dan pengelolaan lingkungan kerja agar tetap nyaman dan produktif.",
    },
    {
      name: "F&B Department",
      description:
        "Mengelola operasional makanan dan minuman, memastikan kualitas layanan serta kepuasan pelanggan.",
    },
  ];

  return (
    <section id="department" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Department <span className="text-primary">Perusahaan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengenal berbagai departemen yang mendukung operasional dan kesuksesan perusahaan kami
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selengkapnya Button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
          >
            Lihat Struktur Organisasi Lengkap
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full mx-4 relative overflow-hidden">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Struktur Organisasi
              </h3>
              <img
                src={stoImage}
                alt="Struktur Organisasi"
                className="rounded-lg w-full object-contain max-h-[75vh] mx-auto"
              />

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DepartmentSection;
