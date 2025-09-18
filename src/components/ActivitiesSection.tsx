import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format } from 'date-fns'; // Import format from date-fns

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  participants: number;
  category: string;
}

const ActivitySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activities, setActivities] = useState<Activity[]>([]);
  const { toast } = useToast();

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/activities');
      if (!response.ok) throw new Error('Failed to fetch activities');
      const data = await response.json();
      setActivities(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const currentActivities = activities.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Pelatihan: "bg-blue-100 text-blue-800",
      Meeting: "bg-green-100 text-green-800",
      CSR: "bg-orange-100 text-orange-800",
      Seminar: "bg-purple-100 text-purple-800",
      "Team Building": "bg-pink-100 text-pink-800",
      Launching: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="activities" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Kegiatan Perusahaan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Berbagai aktivitas dan program yang kami laksanakan untuk mendukung
            pertumbuhan perusahaan dan pengembangan sumber daya manusia
          </p>
        </div>

        {/* Activities Grid with animation */}
        <div className="relative mb-12">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {currentActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="card-hover card-glow overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={`http://localhost:5000${activity.image}`} // Adjust image path
                      alt={activity.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          activity.category
                        )}`}
                      >
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {activity.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {activity.date ? format(new Date(activity.date), 'dd MMMM yyyy') : 'N/A'}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {activity.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {activity.participants} Peserta
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" size="icon" onClick={prevPage} disabled={totalPages <= 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={nextPage} disabled={totalPages <= 1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
            Ingin Berpartisipasi dalam Kegiatan Kami?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan berbagai program dan kegiatan menarik yang kami selenggarakan.
            Dapatkan informasi terbaru melalui kontak kami.
          </p>
          <Button
            className="bg-gradient-primary hover:scale-105 transition-transform"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;