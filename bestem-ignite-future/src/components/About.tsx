import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            About BeSTEM Innovation Hub
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            More Than Learning - We're a <span className="text-primary">Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We empower students with skills for life, not just exams, by providing world-class STEM education tailored for the real world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation Labs</h3>
                <p className="text-muted-foreground">Creative design spaces where learners solve real-world problems through hands-on experimentation.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-innovation/10 p-3 rounded-lg">
                <Target className="w-6 h-6 text-innovation" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-World Focus</h3>
                <p className="text-muted-foreground">From sustainable energy to automation - we tackle challenges that mirror real industries.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Future-Ready Skills</h3>
                <p className="text-muted-foreground">Building confidence through practical projects that prepare students for tomorrow's careers.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-success/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
                <p className="text-muted-foreground">Dedicated educators and industry connections ensure every learner is equipped to thrive.</p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Approach</h3>
            <blockquote className="text-lg text-muted-foreground mb-6 italic border-l-4 border-primary pl-4">
              "We don't focus on memorizing theories. Instead, we create innovation labs where learners build, experiment, and solve challenges."
            </blockquote>
            <p className="text-muted-foreground mb-6">
              BeSTEM ensures that every learner is equipped with skills to thrive in science, technology, engineering, and mathematics — while becoming leaders who shape the future.
            </p>
            <Button variant="innovation" size="lg" onClick={() => navigate('/about')}>
              Learn More About Our Methods
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;