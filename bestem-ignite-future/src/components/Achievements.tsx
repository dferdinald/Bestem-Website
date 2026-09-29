import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal, Globe, Users } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      year: "2024",
      title: "UNESCO Education Innovation Award",
      category: "International Recognition",
      description: "Recognized for outstanding contribution to STEM education innovation in developing countries.",
      icon: Globe,
      color: "primary",
      level: "International"
    },
    {
      year: "2023",
      title: "Ghana Education Excellence Award",
      category: "National Achievement",
      description: "Awarded for transformative impact on STEM education and student outcomes in Ghana.",
      icon: Trophy,
      color: "accent",
      level: "National"
    },
    {
      year: "2023",
      title: "MIT Innovation Partnership",
      category: "Academic Partnership",
      description: "Selected as MIT's official partner for STEM education initiatives in West Africa.",
      icon: Star,
      color: "innovation",
      level: "International"
    },
    {
      year: "2022",
      title: "Best STEM Program - Africa",
      category: "Continental Recognition",
      description: "Recognized as the leading STEM education program across the African continent.",
      icon: Medal,
      color: "success",
      level: "Continental"
    },
    {
      year: "2022",
      title: "Community Impact Award",
      category: "Social Impact",
      description: "Honored for exceptional contribution to community development through education.",
      icon: Users,
      color: "primary",
      level: "National"
    },
    {
      year: "2021",
      title: "Innovation in Education",
      category: "Educational Excellence",
      description: "Awarded for pioneering innovative teaching methods in STEM education.",
      icon: Award,
      color: "innovation",
      level: "National"
    }
  ];

  const studentAchievements = [
    {
      title: "National Robotics Championship",
      year: "2024",
      achievement: "1st Place",
      description: "BeSTEM students won the national robotics competition with their agricultural automation project.",
      participants: "Team of 6 students"
    },
    {
      title: "International Science Fair",
      year: "2023",
      achievement: "Gold Medal",
      description: "Student project on renewable energy solutions won gold at the International Science and Engineering Fair.",
      participants: "3 students"
    },
    {
      title: "Africa Code Challenge",
      year: "2023",
      achievement: "Top 10 Finalists",
      description: "BeSTEM coding team reached top 10 in continental programming competition.",
      participants: "Team of 4 students"
    },
    {
      title: "Young Innovators Award",
      year: "2022",
      achievement: "Winner",
      description: "Student invention for water purification won the national young innovators competition.",
      participants: "Individual student"
    }
  ];

  const recognitions = [
    {
      organization: "The Ghana STEM Network",
      recognition: "Official Partnership",
      year: "2025"
    },
    {
      organization: "STEMAIDE",
      recognition: "Education Partner",
      year: "2024"
    },
    {
      organization: "Perfect End Int. School",
      recognition: "Partner School",
      year: "2024"
    },
    {
      organization: "St. Samuel Int. School",
      recognition: "Partner School",
      year: "2024"
    },
    {
      organization: "Hall of Fame Montessori School",
      recognition: "Partner School",
      year: "2024"
    },
    {
      organization: "Apostolic Faith School",
      recognition: "Partner School",
      year: "2024"
    },
    {
      organization: "SS Peters and Paul Catholic School",
      recognition: "Partner School",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Achievements
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Recognition & <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence in STEM education has been recognized by leading organizations 
            worldwide, and our students continue to achieve remarkable success.
          </p>
        </div>

        {/* Awards & Recognition */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className={`h-2 bg-gradient-${award.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${award.color}/10`}>
                      <award.icon className={`w-6 h-6 text-${award.color}`} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {award.level}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">{award.year}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-3">{award.category}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Student Achievements */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Student Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentAchievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="hover:shadow-primary transition-all duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-foreground">{achievement.title}</h4>
                    <Badge variant="default" className="bg-accent">
                      {achievement.achievement}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <span>{achievement.year}</span>
                    <span>•</span>
                    <span>{achievement.participants}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Official Recognitions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Official Partnerships & Partner Schools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => (
              <Card 
                key={index} 
                className="hover:shadow-primary transition-all duration-300 bg-white text-center"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{recognition.organization}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{recognition.recognition}</p>
                  <Badge variant="outline" className="text-xs">
                    {recognition.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-primary p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Our Impact in Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/90">Students Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-white/90">International Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
