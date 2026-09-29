import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Rocket, Globe, Building } from "lucide-react";

const FutureRoadmap = () => {
  const roadmapItems = [
    { year: "2024", title: "Digital Expansion", description: "Launch online programs and virtual labs", icon: Rocket },
    { year: "2025", title: "Regional Growth", description: "Open second campus in Kumasi", icon: Building },
    { year: "2026", title: "International Reach", description: "Expand to neighboring West African countries", icon: Globe },
    { year: "2027", title: "Innovation Network", description: "Establish 10 innovation hubs across Ghana", icon: Building }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Future Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The <span className="text-primary">Future</span> We're Building
          </h2>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="flex items-center space-x-4 mr-8">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureRoadmap;
