import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/hero-building.jpg";
import img2 from "@/assets/bld2.jpg";

const slides = [
  {
    image: img1,
    title: "Solusi Terbaik Untuk Pencapaian Bisnis Anda",
    desc: "Kami mendukung usaha Anda dengan layanan profesional dan teknologi mutakhir.",
  },
  {
    image: img2,
    title: "Bangun Masa Depan Digital Bisnis Anda",
    desc: "Kami hadir untuk membawa inovasi dalam setiap langkah transformasi digital Anda.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full h-screen flex overflow-hidden bg-black">
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${index}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-20 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Teks */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            className="max-w-lg"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.4, delayChildren: 1.5 } },
            }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-white/90 mt-4"
            >
              {slides[index].desc}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className="mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                className="transition-transform hover:scale-110 hover:shadow-xl "
              >
                Mulai Sekarang
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasi slide ala RCID */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-transform duration-300 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-transform duration-300 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicator */}
      <div className="absolute bottom-16 right-1/2 translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Marquee scrolling tagline ala RCID */}
      <div className="absolute bottom-4 w-full overflow-hidden py-2 bg-black/50">
        <motion.div
          className="whitespace-nowrap text-white text-lg font-semibold"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {"• Solusi Profesional untuk Manajemen Gedung • Layanan Berkualitas • Inovasi & Transformasi Digital • "}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
