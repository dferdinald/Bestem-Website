import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Users, Award } from "lucide-react";

const Curriculum = () => {
  const curriculumLevels = [
    {
      level: "Foundation Level",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      color: "primary",
      modules: [
        { name: "Introduction to Science", weeks: "Weeks 1-3", description: "Basic scientific concepts and methods" },
        { name: "Mathematics in Action", weeks: "Weeks 4-6", description: "Practical math applications" },
        { name: "Technology Basics", weeks: "Weeks 7-9", description: "Introduction to computers and programming" },
        { name: "Engineering Fundamentals", weeks: "Weeks 10-12", description: "Design and building principles" }
      ]
    },
    {
      level: "Intermediate Level",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      color: "innovation",
      modules: [
        { name: "Advanced Problem Solving", weeks: "Weeks 1-4", description: "Complex analytical thinking" },
        { name: "Programming & Algorithms", weeks: "Weeks 5-8", description: "Software development skills" },
        { name: "Robotics & Automation", weeks: "Weeks 9-12", description: "Hardware and software integration" },
        { name: "Innovation Projects", weeks: "Weeks 13-16", description: "Real-world solution development" }
      ]
    },
    {
      level: "Advanced Level",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      color: "accent",
      modules: [
        { name: "Research & Development", weeks: "Weeks 1-6", description: "Independent research projects" },
        { name: "Advanced Technologies", weeks: "Weeks 7-12", description: "AI, ML, and emerging tech" },
        { name: "Entrepreneurship", weeks: "Weeks 13-18", description: "Business development skills" },
        { name: "Capstone Project", weeks: "Weeks 19-24", description: "Comprehensive final project" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Curriculum Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Structured Learning <span className="text-primary">Pathway</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our carefully designed curriculum progresses from foundational concepts to advanced applications, 
            ensuring every student builds strong STEM competencies.
          </p>
        </div>

        <div className="space-y-12">
          {curriculumLevels.map((level, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-${level.color}/10`}>
                      <BookOpen className={`w-6 h-6 text-${level.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{level.level}</CardTitle>
                      <p className="text-muted-foreground">{level.ageGroup} • {level.duration}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={`bg-${level.color}/10 text-${level.color}`}>
                    Level {index + 1}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {level.modules.map((module, moduleIndex) => (
                    <Card key={moduleIndex} className="border border-border">
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h4 className="font-semibold text-foreground mb-1">{module.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {module.weeks}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Skill Mastery</h3>
              <p className="text-muted-foreground">Progressive skill development with hands-on practice</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-innovation mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
              <p className="text-muted-foreground">Team projects and peer learning opportunities</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-muted-foreground">Industry-recognized certificates upon completion</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
