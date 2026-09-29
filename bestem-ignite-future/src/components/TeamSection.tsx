import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, BookOpen } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Bright Selorm Dumevi",
      role: "Founder & Executive Director",
      education: "STEM Education Specialist",
      experience: "Passionate STEM Educator",
      specialization: "Innovation Labs, Curriculum Design",
      bio: "Passionate about transforming STEM education in Ghana through hands-on learning and real-world problem solving.",
      achievements: ["BeSTEM Innovation Hub Founder", "STEM Education Advocate"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "bright@besteminnovationhub.com"
    },
    {
      name: "Akosua Mensah",
      role: "Head of Programs",
      education: "MSc Computer Science, University of Ghana",
      experience: "10+ years in tech education",
      specialization: "Robotics, Programming, AI",
      bio: "Former software engineer turned educator, dedicated to making technology accessible to all young minds.",
      achievements: ["Google for Education Certified Trainer", "Microsoft Innovative Educator"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "akosua@bestem.edu.gh"
    },
    {
      name: "Emmanuel Osei",
      role: "Innovation Lab Manager",
      education: "BSc Mechanical Engineering, KNUST",
      experience: "8+ years in engineering",
      specialization: "3D Design, Manufacturing, Prototyping",
      bio: "Brings industry experience to the classroom, helping students bridge the gap between theory and practice.",
      achievements: ["Ghana Young Engineer Award", "Innovation in Education Certificate"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "emmanuel@bestem.edu.gh"
    },
    {
      name: "Sarah Boateng",
      role: "Community Outreach Director",
      education: "MA Education Policy, University of Cape Coast",
      experience: "12+ years in education",
      specialization: "Community Engagement, Partnerships",
      bio: "Dedicated to expanding STEM access to underserved communities and building lasting partnerships.",
      achievements: ["Community Impact Award", "Education Leadership Certificate"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "sarah@bestem.edu.gh"
    },
    {
      name: "Dr. Ama Adjei",
      role: "Research & Development Lead",
      education: "PhD in Science Education, University of Edinburgh",
      experience: "20+ years in research",
      specialization: "Curriculum Research, Assessment",
      bio: "Leading research initiatives to continuously improve our teaching methods and student outcomes.",
      achievements: ["International Science Education Research Award", "Published 50+ Research Papers"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "ama@bestem.edu.gh"
    },
    {
      name: "Joseph Nkrumah",
      role: "Technology Integration Specialist",
      education: "MSc Information Technology, Ashesi University",
      experience: "7+ years in EdTech",
      specialization: "Digital Learning, Platform Development",
      bio: "Ensuring our technology infrastructure supports innovative learning experiences for all students.",
      achievements: ["EdTech Innovation Award", "Digital Learning Specialist Certification"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "joseph@bestem.edu.gh"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet the <span className="text-primary">Innovators</span> Behind BeSTEM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of educators, engineers, and innovators brings together decades of experience 
            to create transformative STEM learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={member.linkedin}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.education}</p>
                      <p className="text-xs text-muted-foreground">{member.experience}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">Specialization:</p>
                  <p className="text-xs text-muted-foreground">{member.specialization}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3 text-accent" />
                    <p className="text-xs font-semibold text-foreground">Key Achievements:</p>
                  </div>
                  {member.achievements.map((achievement, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center bg-gradient-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Join Our Mission
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you passionate about STEM education and making a difference in young lives? 
            We're always looking for talented educators and innovators to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg">
              Send Your CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
