import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Target, Users, Lightbulb, Cog, TrendingUp, CheckCircle } from "lucide-react";
import classroomImage from "@/assets/gallery-classroom.jpg";
import codingImage from "@/assets/gallery-coding.jpg";
import roboticsImage from "@/assets/robotics-lab.jpg";
import experimentsImage from "@/assets/gallery-experiments.jpg";
import presentationImage from "@/assets/gallery-presentation.jpg";

const Methodology = () => {
  const methodologySteps = [
    {
      step: "01",
      title: "Discover & Explore",
      description: "Students begin with curiosity-driven exploration, asking questions and identifying real-world problems they want to solve.",
      icon: Lightbulb,
      color: "primary",
      activities: ["Problem identification workshops", "Brainstorming sessions", "Research and investigation"],
      image: classroomImage
    },
    {
      step: "02",
      title: "Design & Plan",
      description: "Learners develop solutions through design thinking, creating prototypes and planning their approach systematically.",
      icon: Brain,
      color: "innovation",
      activities: ["Design thinking workshops", "Prototype development", "Project planning sessions"],
      image: codingImage
    },
    {
      step: "03",
      title: "Build & Create",
      description: "Hands-on construction phase where students bring their ideas to life using cutting-edge tools and technologies.",
      icon: Cog,
      color: "accent",
      activities: ["3D printing and modeling", "Programming and coding", "Electronics and robotics"],
      image: roboticsImage
    },
    {
      step: "04",
      title: "Test & Iterate",
      description: "Students test their solutions, gather feedback, and continuously improve their designs through iterative cycles.",
      icon: Target,
      color: "success",
      activities: ["Solution testing", "Peer feedback sessions", "Iterative improvements"],
      image: experimentsImage
    },
    {
      step: "05",
      title: "Share & Impact",
      description: "Learners present their solutions to the community, sharing knowledge and creating real-world impact.",
      icon: Users,
      color: "primary",
      activities: ["Community presentations", "Knowledge sharing", "Impact measurement"],
      image: presentationImage
    }
  ];

  const principles = [
    {
      title: "Learning by Doing",
      description: "We believe hands-on experience is the most effective way to understand complex STEM concepts.",
      icon: CheckCircle,
      color: "primary"
    },
    {
      title: "Real-World Relevance",
      description: "Every project connects to actual challenges in our communities, making learning meaningful and impactful.",
      icon: Target,
      color: "innovation"
    },
    {
      title: "Collaborative Learning",
      description: "Students work in teams, learning from each other and developing essential collaboration skills.",
      icon: Users,
      color: "accent"
    },
    {
      title: "Continuous Innovation",
      description: "We encourage creative thinking and innovative approaches to problem-solving in every project.",
      icon: Lightbulb,
      color: "success"
    },
    {
      title: "Growth Mindset",
      description: "Failure is viewed as a learning opportunity, fostering resilience and continuous improvement.",
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "Industry Connection",
      description: "Our curriculum is informed by industry needs and current technological trends.",
      icon: Cog,
      color: "innovation"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Methodology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How We <span className="text-primary">Transform</span> Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step methodology combines design thinking, hands-on learning, and real-world application 
            to create transformative STEM education experiences.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            The BeSTEM Learning Journey
          </h3>
          
          <div className="space-y-8">
            {methodologySteps.map((step, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-primary transition-all duration-300 bg-white overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 relative overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-4 opacity-90">{step.step}</div>
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full inline-block border-2 border-white/40">
                          <step.icon className="w-12 h-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="lg:w-2/3 p-8">
                    <h4 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Activities:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {step.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${step.color} rounded-full`}></div>
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Core Principles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-${principle.color}/10`}>
                      <principle.icon className={`w-8 h-8 text-${principle.color}`} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research & Evidence */}
        <div className="bg-gradient-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Evidence-Based Approach
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our methodology is backed by extensive research and continuously refined based on student outcomes and feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Student Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">87%</div>
              <div className="text-muted-foreground">Skill Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
