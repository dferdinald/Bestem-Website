import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Users, Target, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoreValues = () => {
  const navigate = useNavigate();
  const values = [
    {
      title: "Innovation First",
      description: "We believe in pushing boundaries and exploring new possibilities. Every challenge is an opportunity to innovate and create solutions that matter.",
      icon: Lightbulb,
      color: "primary",
      principles: [
        "Embrace creative thinking",
        "Challenge conventional approaches",
        "Foster experimental mindset",
        "Celebrate breakthrough moments"
      ]
    },
    {
      title: "Inclusive Excellence",
      description: "Quality STEM education should be accessible to all. We create an environment where every student can thrive regardless of background or starting point.",
      icon: Users,
      color: "innovation",
      principles: [
        "Welcome diverse perspectives",
        "Provide equal opportunities",
        "Support individual learning styles",
        "Build inclusive communities"
      ]
    },
    {
      title: "Real-World Impact",
      description: "Learning is most meaningful when it addresses real challenges. We connect education to community needs and global issues.",
      icon: Globe,
      color: "success",
      principles: [
        "Address community challenges",
        "Connect learning to real problems",
        "Measure tangible outcomes",
        "Create lasting change"
      ]
    },
    {
      title: "Collaborative Growth",
      description: "We learn best together. Collaboration, mentorship, and peer learning are at the heart of our educational approach.",
      icon: Heart,
      color: "accent",
      principles: [
        "Learn from each other",
        "Share knowledge freely",
        "Support peer success",
        "Build lasting relationships"
      ]
    },
    {
      title: "Excellence in Action",
      description: "We strive for the highest standards in everything we do, from curriculum design to student support and community engagement.",
      icon: Target,
      color: "primary",
      principles: [
        "Maintain high standards",
        "Continuously improve",
        "Deliver quality experiences",
        "Exceed expectations"
      ]
    },
    {
      title: "Future-Ready Mindset",
      description: "We prepare students not just for today's world, but for the challenges and opportunities of tomorrow's rapidly evolving landscape.",
      icon: Zap,
      color: "innovation",
      principles: [
        "Anticipate future needs",
        "Develop adaptable skills",
        "Embrace technological change",
        "Prepare for unknown challenges"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Core Values
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Values That <span className="text-primary">Guide</span> Everything We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our core values shape our culture, inform our decisions, and drive our commitment 
            to transformative STEM education for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
            >
              <div className={`h-2 bg-gradient-${value.color}`}></div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`p-4 rounded-full bg-${value.color}/10 inline-block`}>
                    <value.icon className={`w-8 h-8 text-${value.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">How We Live This Value:</h4>
                  <ul className="space-y-2">
                    {value.principles.map((principle, principleIndex) => (
                      <li key={principleIndex} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 bg-${value.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-gradient-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Values in Action
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our values translate into real outcomes and experiences for our students and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground mb-2">Inclusive Environment</div>
              <div className="text-sm text-muted-foreground">Every student feels welcome and supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground mb-2">Community Projects</div>
              <div className="text-sm text-muted-foreground">Real-world solutions developed by students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground mb-2">Student Satisfaction</div>
              <div className="text-sm text-muted-foreground">Students love learning with us</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Share Our Values?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            If these values resonate with you, we'd love to have you join our community of learners, 
            educators, and innovators working to transform STEM education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero"
              size="lg"
              onClick={() => navigate('/about')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
