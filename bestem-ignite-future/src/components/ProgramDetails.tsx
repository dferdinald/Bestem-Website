import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Calendar, Target, BookOpen, Lightbulb, Code, Cog, TrendingUp, Brain } from "lucide-react";
import { generateBrochurePDF } from "@/utils/generateBrochure";
import RegistrationModal from "./RegistrationModal";

const ProgramDetails = () => {
  const [searchParams] = useSearchParams();
  const programParam = searchParams.get('program');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const programs = [
    {
      id: "stem-foundations",
      title: "STEM Foundations",
      icon: BookOpen,
      color: "primary",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 9:00 AM - 12:00 PM",
      description: "A comprehensive introduction to Science, Technology, Engineering, and Mathematics through hands-on projects and experiments.",
      objectives: [
        "Develop scientific thinking and problem-solving skills",
        "Build confidence in mathematical concepts",
        "Introduce basic engineering principles",
        "Foster curiosity about the natural world"
      ],
      skills: ["Scientific Method", "Basic Programming", "Mathematical Reasoning", "Critical Thinking", "Teamwork"],
      projects: [
        "Build a simple robot",
        "Create a weather station",
        "Design a bridge structure",
        "Develop a basic mobile app"
      ],
      prerequisites: "None - beginner friendly",
      certification: "BeSTEM STEM Foundations Certificate"
    },
    {
      id: "innovation-labs",
      title: "Innovation Labs",
      icon: Lightbulb,
      color: "innovation",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 1:00 PM - 5:00 PM",
      description: "Advanced problem-solving workshops where students tackle real-world challenges using design thinking and cutting-edge technology.",
      objectives: [
        "Master design thinking methodology",
        "Develop innovative solutions to real problems",
        "Learn advanced prototyping techniques",
        "Build entrepreneurial mindset"
      ],
      skills: ["Design Thinking", "3D Modeling", "Prototyping", "Project Management", "Presentation Skills"],
      projects: [
        "Smart agriculture system",
        "Renewable energy solution",
        "Community health app",
        "Educational game development"
      ],
      prerequisites: "STEM Foundations or equivalent experience",
      certification: "BeSTEM Innovation Labs Certificate"
    },
    {
      id: "robotics-engineering",
      title: "Robotics & Engineering",
      icon: Cog,
      color: "accent",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 9:00 AM - 1:00 PM",
      description: "Comprehensive robotics program covering mechanical design, electronics, programming, and AI integration.",
      objectives: [
        "Master robotics programming and control",
        "Understand mechanical and electrical engineering",
        "Develop AI and machine learning skills",
        "Prepare for robotics competitions"
      ],
      skills: ["Arduino/Raspberry Pi", "Python Programming", "CAD Design", "Sensor Integration", "AI/ML Basics"],
      projects: [
        "Autonomous navigation robot",
        "Robotic arm with AI vision",
        "Drone programming project",
        "Competition robot design"
      ],
      prerequisites: "Basic programming knowledge recommended",
      certification: "BeSTEM Robotics Engineering Certificate"
    },
    {
      id: "coding-tech-skills",
      title: "Coding & Tech Skills",
      icon: Code,
      color: "innovation",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 11:00 AM - 2:00 PM",
      description: "Future-ready training in digital literacy and software creation through hands-on projects.",
      objectives: [
        "Master programming fundamentals",
        "Build web and mobile applications",
        "Develop problem-solving skills",
        "Create portfolio-ready projects"
      ],
      skills: ["HTML/CSS", "JavaScript", "Python", "Web Development", "App Creation", "Git Basics"],
      projects: [
        "Personal portfolio website",
        "Interactive web game",
        "Simple mobile app",
        "Automated task script"
      ],
      prerequisites: "None - beginner friendly",
      certification: "BeSTEM Coding & Tech Skills Certificate"
    },
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "primary",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 10:00 AM - 2:00 PM",
      description: "Explore artificial intelligence and machine learning through hands-on projects using Python and industry-standard tools.",
      objectives: [
        "Understand AI and ML fundamentals",
        "Build and train machine learning models",
        "Develop intelligent applications",
        "Apply AI to real-world problems"
      ],
      skills: ["Python", "Machine Learning Algorithms", "Neural Networks", "Data Science", "TensorFlow/PyTorch", "AI Ethics"],
      projects: [
        "Image recognition system",
        "Chatbot with NLP",
        "Predictive analytics model",
        "AI-powered recommendation system"
      ],
      prerequisites: "Basic programming knowledge recommended",
      certification: "BeSTEM AI & Machine Learning Certificate"
    },
    {
      id: "advanced-programming",
      title: "Advanced Programming",
      icon: Code,
      color: "success",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 2:00 PM - 6:00 PM",
      description: "Intensive programming course covering multiple languages, frameworks, and real-world application development.",
      objectives: [
        "Master multiple programming languages",
        "Develop full-stack applications",
        "Learn software engineering best practices",
        "Build portfolio-ready projects"
      ],
      skills: ["Python", "JavaScript", "React", "Node.js", "Database Design", "Git/GitHub", "API Development"],
      projects: [
        "E-commerce web application",
        "Mobile app with backend",
        "Data analysis dashboard",
        "Open source contribution"
      ],
      prerequisites: "Basic programming experience required",
      certification: "BeSTEM Advanced Programming Certificate"
    },
    {
      id: "entrepreneurship",
      title: "STEM Entrepreneurship",
      icon: TrendingUp,
      color: "primary",
      ageGroup: "5+ years",
      duration: "12 weeks+",
      classSize: "10-30 students",
      schedule: "Saturdays, 10:00 AM - 2:00 PM",
      description: "Learn to transform STEM innovations into viable business ventures with mentorship from industry experts.",
      objectives: [
        "Develop business acumen and entrepreneurial skills",
        "Learn to validate and scale STEM innovations",
        "Master pitch presentation and investor relations",
        "Build network with industry mentors"
      ],
      skills: ["Business Planning", "Market Research", "Financial Modeling", "Pitch Presentation", "Leadership"],
      projects: [
        "Startup business plan",
        "Market validation study",
        "Investor pitch presentation",
        "Prototype development"
      ],
      prerequisites: "Completion of any BeSTEM technical program",
      certification: "BeSTEM STEM Entrepreneurship Certificate"
    }
  ];

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  // Handle program selection from URL parameter
  useEffect(() => {
    if (programParam) {
      const program = programs.find(p => p.id === programParam);
      if (program) {
        setSelectedProgram(program);
        // Scroll to the program details section
        setTimeout(() => {
          document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [programParam]);

  return (
    <section id="program-details" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Program Details
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore Our <span className="text-primary">Programs</span> in Detail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into each program to understand the curriculum, learning objectives, 
            and outcomes that will shape your STEM journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Program Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-foreground">Select Program</h3>
            <div className="space-y-3">
              {programs.map((program) => (
                <Button
                  key={program.id}
                  variant={selectedProgram.id === program.id ? "default" : "outline"}
                  className={`w-full justify-start text-left h-auto p-4 ${
                    selectedProgram.id === program.id 
                      ? `bg-${program.color} hover:bg-${program.color}/90` 
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => setSelectedProgram(program)}
                >
                  <div className="flex items-center space-x-3">
                    <program.icon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">{program.title}</div>
                      <div className="text-xs opacity-80">{program.ageGroup}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-${selectedProgram.color}/10`}>
                    <selectedProgram.icon className={`w-8 h-8 text-${selectedProgram.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{selectedProgram.title}</CardTitle>
                    <p className="text-muted-foreground">{selectedProgram.description}</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-semibold">{selectedProgram.ageGroup}</div>
                    <div className="text-xs text-muted-foreground">Age Group</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-semibold">{selectedProgram.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <Target className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-semibold">{selectedProgram.classSize}</div>
                    <div className="text-xs text-muted-foreground">Class Size</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <div className="text-sm font-semibold">Weekly</div>
                    <div className="text-xs text-muted-foreground">Frequency</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="objectives" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="objectives">Objectives</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="objectives" className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Learning Objectives</h4>
                    <ul className="space-y-3">
                      {selectedProgram.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-${selectedProgram.color} rounded-full mt-2`}></div>
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="skills" className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Skills You'll Develop</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProgram.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Key Projects</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProgram.projects.map((project, index) => (
                        <Card key={index} className="border border-border">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 bg-${selectedProgram.color}/10 rounded-lg flex items-center justify-center`}>
                                <span className={`text-${selectedProgram.color} font-bold text-sm`}>
                                  {index + 1}
                                </span>
                              </div>
                              <span className="font-medium">{project}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Schedule</h4>
                        <p className="text-muted-foreground">{selectedProgram.schedule}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Prerequisites</h4>
                        <p className="text-muted-foreground">{selectedProgram.prerequisites}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Certification</h4>
                        <p className="text-muted-foreground">{selectedProgram.certification}</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => setIsRegistrationOpen(true)}
                    >
                      Enroll in {selectedProgram.title}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                      onClick={generateBrochurePDF}
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <RegistrationModal 
          open={isRegistrationOpen} 
          onOpenChange={setIsRegistrationOpen}
          preSelectedProgram={selectedProgram.title}
        />
      </div>
    </section>
  );
};

export default ProgramDetails;
