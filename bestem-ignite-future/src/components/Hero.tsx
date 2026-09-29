import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Igniting Curiosity, Innovation & Leadership Through 
            <span className="text-accent"> STEM</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            At BeSTEM Innovation Hub, we create a future where young minds don't just learn science and technology — they live it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => navigate('/contact#get-in-touch')}>
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary" onClick={() => navigate('/programs')}>
              Explore Programs
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Lightbulb className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Practical STEM Experiences</h3>
              <p className="text-sm opacity-90">Hands-on learning that brings theory to life</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Rocket className="w-12 h-12 mb-4 text-innovation" />
              <h3 className="text-xl font-semibold mb-2">Innovation & Entrepreneurship</h3>
              <p className="text-sm opacity-90">Building tomorrow's leaders and changemakers</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="w-12 h-12 mb-4 text-success" />
              <h3 className="text-xl font-semibold mb-2">Future-Ready Skills</h3>
              <p className="text-sm opacity-90">Preparing learners for a fast-changing world</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;