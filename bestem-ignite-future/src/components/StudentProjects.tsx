import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Eye, Heart, Share2 } from "lucide-react";

const StudentProjects = () => {
  const projects = [
    {
      title: "Smart Irrigation System",
      student: "Akosua Mensah, Age 16",
      program: "Robotics & Engineering",
      description: "An automated irrigation system that uses soil moisture sensors and weather data to optimize water usage for local farmers.",
      impact: "Helped 20+ farmers reduce water usage by 30%",
      image: "/WhatsApp Image 2025-10-08 at 21.30.07.jpeg",
      awards: ["National Innovation Award", "Best Environmental Solution"],
      likes: 45,
      views: 230
    },
    {
      title: "Educational Game App",
      student: "Kwame Asante, Age 17",
      program: "Advanced Programming",
      description: "A mobile app that teaches basic math and science concepts through interactive games, designed for primary school students.",
      impact: "Downloaded by 500+ students across Ghana",
      image: "/WhatsApp Image 2025-10-08 at 21.30.08.jpeg",
      awards: ["Best Mobile App", "Student Choice Award"],
      likes: 38,
      views: 180
    },
    {
      title: "Water Purification Device",
      student: "Ama Boateng, Age 15",
      program: "Innovation Labs",
      description: "A low-cost water purification system using locally available materials, designed for rural communities without access to clean water.",
      impact: "Piloted in 3 communities, serving 200+ people",
      image: "/WhatsApp Image 2025-10-08 at 21.34.42.jpeg",
      awards: ["Community Impact Award", "Young Innovator Prize"],
      likes: 52,
      views: 310
    },
    {
      title: "Solar Charging Station",
      student: "Emmanuel Osei, Age 18",
      program: "STEM Entrepreneurship",
      description: "A portable solar-powered charging station for mobile devices, designed for areas with limited electricity access.",
      impact: "Business plan secured ₵5,000 startup funding",
      image: "/WhatsApp Image 2025-10-08 at 21.34.43 (1).jpeg",
      awards: ["Best Business Plan", "Sustainability Award"],
      likes: 41,
      views: 195
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Student Innovations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Amazing <span className="text-primary">Student Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the incredible innovations our students have created to solve real-world problems 
            and make a positive impact in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
            >
              <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-semibold">{project.program}</div>
                  </div>
                </div>
                
                {/* Project Stats */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{project.views}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{project.likes}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold">{project.student}</p>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4 p-3 bg-gradient-card rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm mb-1">Impact Achieved:</h4>
                  <p className="text-primary font-semibold text-sm">{project.impact}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Awards & Recognition:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.awards.map((award, awardIndex) => (
                      <Badge key={awardIndex} variant="secondary" className="text-xs">
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;
