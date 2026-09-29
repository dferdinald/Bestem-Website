import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Rocket, Award, Building } from "lucide-react";

const StrategicGoals = () => {
  const goals = [
    {
      title: "Expand Access",
      target: "Reach 5,000+ students by 2027",
      description: "Make quality STEM education accessible to students across Ghana and West Africa",
      icon: Users,
      color: "primary",
      progress: 20,
      milestones: ["Mobile labs in 20 communities", "Online program launch", "Scholarship fund expansion"]
    },
    {
      title: "Innovation Excellence",
      target: "50+ student innovations annually",
      description: "Foster breakthrough innovations that solve real-world problems",
      icon: Rocket,
      color: "innovation",
      progress: 35,
      milestones: ["Innovation incubator", "Patent support program", "Industry partnerships"]
    },
    {
      title: "Global Recognition",
      target: "Top 10 STEM programs in Africa",
      description: "Achieve continental recognition for educational excellence and impact",
      icon: Award,
      color: "accent",
      progress: 60,
      milestones: ["International accreditation", "Research publications", "Global partnerships"]
    },
    {
      title: "Infrastructure Growth",
      target: "10 innovation hubs by 2030",
      description: "Establish state-of-the-art facilities across multiple regions",
      icon: Building,
      color: "success",
      progress: 15,
      milestones: ["Second campus opening", "Regional expansion", "Equipment upgrades"]
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Strategic Goals
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-accent">Roadmap</span> to Impact
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Clear, measurable goals that drive our mission forward and ensure we create lasting impact in STEM education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${goal.color}/20 border border-${goal.color}/30 mr-4`}>
                    <goal.icon className={`w-8 h-8 text-${goal.color === 'primary' ? 'white' : goal.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{goal.title}</h3>
                    <p className="text-accent font-semibold">{goal.target}</p>
                  </div>
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed">{goal.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">Progress</span>
                    <span className="text-sm text-accent font-semibold">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`bg-${goal.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Milestones:</h4>
                  <ul className="space-y-2">
                    {goal.milestones.map((milestone, milestoneIndex) => (
                      <li key={milestoneIndex} className="flex items-center space-x-2">
                        <Target className="w-3 h-3 text-accent" />
                        <span className="text-white/80 text-sm">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicGoals;
