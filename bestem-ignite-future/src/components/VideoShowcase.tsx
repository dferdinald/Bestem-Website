import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

const VideoShowcase = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Video Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See BeSTEM in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the energy, innovation, and excitement of our programs through 
            this video showcasing our students and facilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Card 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="relative aspect-video bg-gradient-primary">
              <video 
                className="w-full h-full object-cover"
                poster="/WhatsApp Image 2025-10-08 at 21.34.42.jpeg"
              >
                <source src="/WhatsApp Video 2025-10-08 at 21.47.08.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 ml-2 border-t-[15px] border-t-transparent border-l-[25px] border-l-primary border-b-[15px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                BeSTEM Innovation Hub in Action
                </h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch our students engage in hands-on learning, explore innovative projects, and develop the skills they need to become tomorrow's changemakers.
                </p>
              </CardContent>
            </Card>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 z-20 bg-white hover:bg-gray-200"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <video 
                className="w-full rounded-lg max-h-[85vh]"
                controls
                autoPlay
              >
                <source src="/WhatsApp Video 2025-10-08 at 21.47.08.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <div className="mt-16 text-center bg-gradient-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Want to See More?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for regular updates, student project showcases, 
            and behind-the-scenes content from BeSTEM Innovation Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://youtube.com/Bestem360', '_blank')}
            >
              View Our YouTube Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
