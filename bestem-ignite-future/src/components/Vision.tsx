import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Globe, Users, Lightbulb, Rocket } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Vision & Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Building Tomorrow's <span className="text-accent">Innovators</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-accent/20 p-3 rounded-lg mr-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                To build a generation of bold innovators and problem-solvers who use STEM as a tool to transform communities and shape the future of the world.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-innovation/20 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-innovation" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="opacity-90">Make STEM education practical, accessible, and inspiring for all learners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="opacity-90">Equip students with real-world skills for careers, leadership, and global citizenship</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="opacity-90">Provide spaces where curiosity meets creativity, and ideas turn into impactful innovations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">STEM Leaders</h4>
              <p className="text-white/80 text-sm">Creating leaders who think beyond the classroom</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Target className="w-12 h-12 text-innovation mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Industry Bridge</h4>
              <p className="text-white/80 text-sm">Bridging the gap between learning and industry skills</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Innovation Culture</h4>
              <p className="text-white/80 text-sm">Inspiring problem-solving among young people</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Real Projects</h4>
              <p className="text-white/80 text-sm">Building confidence through practical solutions</p>
            </div>
          </div>
          
          <p className="text-xl text-white/90 mt-8 font-medium">
            We measure success not in grades, but in projects built, problems solved, and lives changed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;