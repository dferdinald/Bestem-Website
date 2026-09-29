import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Award, Building, Rocket, Globe } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2019",
      title: "The Vision Begins",
      description: "Bright Selorm Dumevi founded BeSTEM Innovation Hub with a vision to transform STEM education in Ghana through hands-on learning.",
      icon: Lightbulb,
      color: "primary",
      achievements: ["Founded by Bright Selorm Dumevi", "First pilot program with 25 students"]
    },
    {
      year: "2020",
      title: "First Innovation Lab",
      description: "Opened our first state-of-the-art innovation lab in Accra, equipped with 3D printers, robotics kits, and programming stations.",
      icon: Building,
      color: "innovation",
      achievements: ["1,000 sq ft innovation lab", "Served 150+ students", "5 core programs launched"]
    },
    {
      year: "2021",
      title: "Community Expansion",
      description: "Expanded outreach programs to underserved communities, bringing STEM education directly to students who needed it most.",
      icon: Users,
      color: "success",
      achievements: ["Reached 10 communities", "Mobile STEM lab launched", "300+ students impacted"]
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "Received the Ghana Education Innovation Award and established partnerships with leading technology companies.",
      icon: Award,
      color: "accent",
      achievements: ["Ghana Education Innovation Award", "5 corporate partnerships", "500+ students served"]
    },
    {
      year: "2023",
      title: "International Partnerships",
      description: "Formed strategic partnerships with international organizations and launched our first exchange program.",
      icon: Globe,
      color: "primary",
      achievements: ["UNESCO partnership", "MIT collaboration", "International exchange program"]
    },
    {
      year: "2024",
      title: "Scaling Impact",
      description: "Launched our largest expansion yet, opening new facilities and reaching our goal of 1000+ students annually.",
      icon: Rocket,
      color: "innovation",
      achievements: ["Second campus opened", "1000+ students milestone", "5 programs offered"]
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Our Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Building the <span className="text-accent">Future</span> Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From a small vision to a transformative movement - discover the milestones that have shaped 
            BeSTEM Innovation Hub into Ghana's leading STEM education institution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-${event.color}/20 border-4 border-white/30 flex items-center justify-center backdrop-blur-sm`}>
                      <event.icon className={`w-8 h-8 text-${event.color === 'primary' ? 'white' : event.color}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                            {event.year}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-white/90 mb-4 leading-relaxed">{event.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-accent">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {event.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span className="text-white/80 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-full bg-accent/20 border border-accent/30">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Our journey is just beginning. By 2030, we envision BeSTEM Innovation Hub as the leading 
                STEM education network across West Africa, empowering 10,000+ students annually and 
                establishing innovation labs in every major city.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">2030</div>
                  <div className="text-white/80 text-sm">Regional Expansion</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">10,000+</div>
                  <div className="text-white/80 text-sm">Students Annually</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">50+</div>
                  <div className="text-white/80 text-sm">Innovation Labs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
