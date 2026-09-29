import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Lightbulb, Users, Globe } from "lucide-react";

const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const impactStories = [
    {
      title: "Building Confidence Through Robotics",
      student: "Sarah K., Age 15",
      program: "Robotics & Engineering",
      story: "Sarah joined BeSTEM with no prior coding experience. After completing the robotics program, she and her team built a simple automatic plant watering system as their final project. She's now confident in her abilities and plans to study engineering in university. 'BeSTEM showed me that I can learn anything if I try,' she says.",
      impact: "Completed 3 projects, won school science fair",
      icon: Lightbulb,
      color: "primary",
      image: "/placeholder.svg"
    },
    {
      title: "From Beginner to Young Developer",
      student: "Michael A., Age 16",
      program: "Coding & Tech Skills",
      story: "Michael started with our beginner coding class and developed his first website after just 8 weeks. He created a simple study planner app for his classmates, which 25 students now use. He's excited to continue learning and improving his programming skills.",
      impact: "Built first app, 25+ users at school",
      icon: Globe,
      color: "innovation",
      image: "/placeholder.svg"
    },
    {
      title: "Science Comes to Life",
      student: "Grace M., Age 13",
      program: "STEM Foundations",
      story: "Grace was struggling with science in school before joining BeSTEM. Through hands-on experiments and projects, she discovered a passion for chemistry. Her grades improved from C to A, and she now helps her classmates with science homework. 'Learning by doing makes everything easier,' she shares.",
      impact: "Grades improved from C to A, helping peers",
      icon: Heart,
      color: "success",
      image: "/placeholder.svg"
    },
    {
      title: "Sharing the STEM Passion",
      student: "David O., Age 17",
      program: "Innovation Labs",
      story: "After completing the Innovation Labs program, David started a small STEM club at his school where he teaches 12 younger students basic electronics and coding every Saturday. He's passionate about making STEM accessible to everyone in his community.",
      impact: "Teaching 12 students, running weekly club",
      icon: Users,
      color: "accent",
      image: "/placeholder.svg"
    }
  ];

  const communityImpacts = [
    {
      title: "School Partnerships",
      location: "Greater Accra",
      description: "Partnered with 7 local schools to introduce STEM programs, providing hands-on learning opportunities to students who previously had limited access to science equipment.",
      metrics: ["7 partner schools", "150+ students reached", "Monthly workshops"]
    },
    {
      title: "Girls in STEM Initiative",
      location: "East Legon Area",
      description: "Special weekend program encouraging girls to explore STEM subjects, with 45% of our current students being girls who have shown increased confidence in science and math.",
      metrics: ["45% female students", "Weekly sessions", "Active mentorship"]
    },
    {
      title: "Community Workshops",
      location: "Accra",
      description: "Students share their knowledge through quarterly community events where they demonstrate their projects and teach basic coding and robotics to interested community members.",
      metrics: ["Quarterly events", "20+ attendees per event", "Student-led teaching"]
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % impactStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + impactStories.length) % impactStories.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Impact Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Stories, Real <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how BeSTEM students are transforming their communities and creating solutions 
            for real-world challenges through innovative STEM education.
          </p>
        </div>

        {/* Featured Impact Story */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="bg-white shadow-card hover:shadow-primary transition-all duration-300 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className={`p-6 bg-white/20 rounded-full inline-block mb-4`}>
                    {React.createElement(impactStories[currentStory].icon, { className: "w-12 h-12" })}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{impactStories[currentStory].student}</h4>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {impactStories[currentStory].program}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="lg:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {impactStories[currentStory].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {impactStories[currentStory].story}
                </p>
                
                <div className="bg-gradient-card p-4 rounded-lg mb-6">
                  <h5 className="font-semibold text-foreground mb-2">Impact Achieved:</h5>
                  <p className="text-primary font-semibold">{impactStories[currentStory].impact}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {impactStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentStory 
                            ? 'bg-primary scale-125' 
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevStory}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextStory}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Community Impact */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Community Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityImpacts.map((impact, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {impact.title}
                  </h4>
                  <Badge variant="secondary" className="mb-4">
                    {impact.location}
                  </Badge>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {impact.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-foreground text-sm">Key Metrics:</h5>
                    {impact.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
