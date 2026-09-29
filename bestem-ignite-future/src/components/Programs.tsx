import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, Code, Cog, TrendingUp, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import innovationLabImage from "@/assets/innovation-lab.jpg";
import codingStudentsImage from "@/assets/coding-students.jpg";
import roboticsLabImage from "@/assets/robotics-lab.jpg";
import classroomImage from "@/assets/gallery-classroom.jpg";
import experimentsImage from "@/assets/gallery-experiments.jpg";
import workshopImage from "@/assets/gallery-workshop.jpg";
import codingImage from "@/assets/gallery-coding.jpg";
import presentationImage from "@/assets/gallery-presentation.jpg";

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: "stem-foundations",
      title: "STEM Foundations",
      description: "Hands-on introduction to critical STEM concepts through engaging projects",
      icon: BookOpen,
      image: classroomImage,
      highlights: ["Project-Based Learning", "Critical Thinking", "Scientific Method"],
      color: "primary"
    },
    {
      id: "innovation-labs",
      title: "Innovation Labs",
      description: "Creative design spaces where learners solve real-world problems",
      icon: Lightbulb,
      image: innovationLabImage,
      highlights: ["Problem Solving", "Design Thinking", "Prototyping"],
      color: "accent"
    },
    {
      id: "coding-tech-skills",
      title: "Coding & Tech Skills",
      description: "Future-ready training in digital literacy and software creation",
      icon: Code,
      image: codingImage,
      highlights: ["Programming Languages", "Web Development", "App Creation"],
      color: "innovation"
    },
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning",
      description: "Explore artificial intelligence and build intelligent systems",
      icon: Brain,
      image: codingStudentsImage,
      highlights: ["AI Fundamentals", "Machine Learning", "Data Science Basics"],
      color: "primary"
    },
    {
      id: "robotics-engineering",
      title: "Engineering & Robotics",
      description: "Practical problem-solving using modern tools and technologies",
      icon: Cog,
      image: roboticsLabImage,
      highlights: ["Robotics Design", "3D Printing", "Automation"],
      color: "success"
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship in STEM",
      description: "Nurturing creativity, leadership, and business thinking in young innovators",
      icon: TrendingUp,
      image: presentationImage,
      highlights: ["Business Planning", "Leadership Skills", "Innovation Management"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            We Design <span className="text-primary">Experiences</span>, Not Classes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every program at BeSTEM is structured to inspire, challenge, and prepare learners for the future through project-driven learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-lg bg-${program.color}/20 border border-${program.color}/30`}>
                    <program.icon className={`w-6 h-6 text-${program.color}`} />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    onClick={() => navigate(`/programs?program=${program.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;