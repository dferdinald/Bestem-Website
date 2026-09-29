import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";

const EventGallery = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      title: "Innovation Showcase 2024",
      date: "March 15, 2024",
      location: "BeSTEM Main Campus",
      attendees: "200+ participants",
      description: "Our annual showcase where students present their innovative projects to industry experts, parents, and the community.",
      highlights: [
        "25 student projects presented",
        "10 industry judges",
        "5 awards categories",
        "Live demonstrations"
      ],
      images: [
        { src: "/WhatsApp Image 2025-10-08 at 21.34.43.jpeg", caption: "Students presenting their projects" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.44 (1).jpeg", caption: "Industry experts judging innovations" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.44.jpeg", caption: "Award ceremony highlights" },
        { src: "/WhatsApp Image 2025-10-08 at 21.30.07.jpeg", caption: "Community engagement activities" }
      ]
    },
    {
      title: "STEM Career Fair 2024",
      date: "February 20, 2024",
      location: "University of Ghana",
      attendees: "300+ students",
      description: "A comprehensive career fair connecting students with STEM professionals and exploring future career pathways.",
      highlights: [
        "15 industry partners",
        "Career guidance sessions",
        "Interactive workshops",
        "Networking opportunities"
      ],
      images: [
        { src: "/WhatsApp Image 2025-10-08 at 21.30.08.jpeg", caption: "Students meeting industry professionals" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.42.jpeg", caption: "Interactive career workshops" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.43 (1).jpeg", caption: "Technology demonstrations" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.43.jpeg", caption: "Networking sessions" }
      ]
    },
    {
      title: "Robotics Competition 2023",
      date: "December 10, 2023",
      location: "Accra Sports Stadium",
      attendees: "150+ competitors",
      description: "National robotics competition where our students competed against teams from across Ghana.",
      highlights: [
        "1st place in automation category",
        "Best design award",
        "Team collaboration excellence",
        "Media coverage"
      ],
      images: [
        { src: "/WhatsApp Image 2025-10-08 at 21.34.44 (1).jpeg", caption: "Robots in action during competition" },
        { src: "/WhatsApp Image 2025-10-08 at 21.34.44.jpeg", caption: "Team strategy discussions" },
        { src: "/WhatsApp Image 2025-10-08 at 21.30.07.jpeg", caption: "Victory celebration moments" },
        { src: "/WhatsApp Image 2025-10-08 at 21.30.08.jpeg", caption: "Awards ceremony" }
      ]
    }
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEventData = events[currentEvent];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Event Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Memorable <span className="text-primary">Events</span> & Celebrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Relive the excitement of our major events, competitions, and celebrations
            that bring our community together and showcase student achievements.
          </p>
        </div>

        {/* Event Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevEvent}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentEvent
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextEvent}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Current Event Display */}
        <Card className="bg-white shadow-card border-border text-foreground max-w-6xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Info */}
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{currentEventData.title}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{currentEventData.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{currentEventData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{currentEventData.attendees}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentEventData.description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Event Highlights:</h4>
                  <ul className="space-y-2">
                    {currentEventData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Event Images */}
              <div className="grid grid-cols-2 gap-4">
                {currentEventData.images.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all relative">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs text-center px-2">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventGallery;
