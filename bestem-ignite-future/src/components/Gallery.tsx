import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/WhatsApp Image 2025-10-08 at 21.30.07.jpeg",
      title: "BeSTEM in Action",
      description: "Capturing moments of learning and discovery at BeSTEM Innovation Hub"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.30.08.jpeg",
      title: "Hands-on Learning",
      description: "Students engaging with technology and innovation"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.34.42.jpeg",
      title: "Innovation Lab",
      description: "Our students exploring STEM concepts through practical projects"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.34.43 (1).jpeg",
      title: "STEM Workshop",
      description: "Building robots and electronics projects in our innovation lab"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.34.43.jpeg",
      title: "Creative Learning",
      description: "Students working on exciting STEM projects"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.34.44 (1).jpeg",
      title: "Team Collaboration",
      description: "Learning together and building the future"
    },
    {
      src: "/WhatsApp Image 2025-10-08 at 21.34.44.jpeg",
      title: "Innovation Showcase",
      description: "Celebrating our students' achievements and creativity"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Innovation in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore moments of discovery, creativity, and achievement from our BeSTEM community. 
            See how our students transform ideas into reality through hands-on STEM education.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute -top-12 right-0 z-10"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;