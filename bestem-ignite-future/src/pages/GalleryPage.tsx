import Navigation from "@/components/Navigation";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import StudentProjects from "@/components/StudentProjects";
import EventGallery from "@/components/EventGallery";
import VideoShowcase from "@/components/VideoShowcase";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Gallery />
        <StudentProjects />
        <VideoShowcase />
        <EventGallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;