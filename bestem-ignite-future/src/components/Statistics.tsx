import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Award, Building } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
  isVisible,
  triggerAnimation = false
}: {
  end: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
  triggerAnimation?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      startAnimation();
    }
  }, [isVisible, end, duration, hasAnimated]);

  useEffect(() => {
    if (triggerAnimation && hasAnimated) {
      startAnimation();
    }
  }, [triggerAnimation]);

  return <span>{count}{suffix}</span>;
};

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Students Empowered",
      description: "Young minds transformed through hands-on STEM education",
      color: "primary"
    },
    {
      icon: GraduationCap,
      number: 5,
      suffix: "+",
      label: "Programs Offered",
      description: "Comprehensive STEM programs from basics to advanced innovation",
      color: "innovation"
    },
    {
      icon: Building,
      number: 10,
      suffix: "+",
      label: "School Partnerships",
      description: "Collaborating with institutions to expand STEM access",
      color: "success"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Making a Real <span className="text-accent">Difference</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Numbers that tell the story of transformation, innovation, and the bright future we're building together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={`${stat.label}-${index}`}
              className={`bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${hoveredCard === index ? 'animate-pulse-glow' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-${stat.color}/20 border border-${stat.color}/30 transition-all duration-500 ${
                    isVisible ? 'animate-bounce-in' : 'scale-0'
                  } ${hoveredCard === index ? 'animate-bounce-in scale-110' : ''}`}
                  style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    <stat.icon className={`w-8 h-8 text-${stat.color === 'primary' ? 'white' : stat.color} transition-all duration-300 ${
                      hoveredCard === index ? 'scale-110' : ''
                    }`} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-2 text-accent">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={1500}
                      isVisible={isVisible}
                      triggerAnimation={hoveredCard === index}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{stat.label}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
