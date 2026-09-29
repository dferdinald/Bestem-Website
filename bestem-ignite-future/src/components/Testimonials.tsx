import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Student, Age 16",
      program: "Robotics & Engineering",
      content: "BeSTEM changed my perspective on what I could achieve. I never thought I could build a robot, but now I'm designing solutions for real-world problems. The hands-on approach made everything click!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Kwame Asante",
      role: "Parent",
      program: "STEM Foundations",
      content: "My daughter has become so confident and curious about science since joining BeSTEM. She comes home excited to share what she learned and even teaches me! The transformation is incredible.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Osei",
      role: "Student, Age 14",
      program: "Innovation Labs",
      content: "I love how we don't just learn theory but actually create things. Last month, I built an app to help farmers track their crops. BeSTEM taught me that technology can solve real problems.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Emmanuel Adjei",
      role: "School Principal",
      program: "School Partnership",
      content: "Partnering with BeSTEM has revolutionized our science education. Our students are more engaged, creative, and confident. The practical approach complements our curriculum perfectly.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Ama Boateng",
      role: "Student, Age 17",
      program: "Advanced Programming",
      content: "The mentorship at BeSTEM is amazing. My instructors don't just teach code; they help me think like an innovator. I'm now developing my own startup idea with their guidance.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Joseph Nkrumah",
      role: "Parent & Engineer",
      program: "Multiple Programs",
      content: "As an engineer myself, I'm impressed by BeSTEM's curriculum. My son is learning concepts I didn't encounter until university. The quality of education here is world-class.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  // Auto-scroll functionality (right to left)
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      const interval = setInterval(() => {
        handleTransition(() => {
          setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        });
      }, 7000); // Change testimonial every 7 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, isTransitioning, testimonials.length]);

  // Handle smooth transitions
  const handleTransition = (callback: () => void) => {
    setIsTransitioning(true);
    callback();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - previous testimonial (matches auto-scroll direction)
      handleTransition(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      });
    }

    if (isRightSwipe) {
      // Swipe right - next testimonial (opposite to auto-scroll)
      handleTransition(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      });
    }
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Mouse drag left - previous testimonial (matches auto-scroll direction)
      handleTransition(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      });
    }

    if (isRightSwipe) {
      // Mouse drag right - next testimonial (opposite to auto-scroll)
      handleTransition(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      });
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Student & Parent Voices
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stories of <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our students, parents, and partners about how BeSTEM is making a real difference in their lives and communities.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card
            className={`bg-white shadow-card hover:shadow-primary transition-all duration-500 cursor-grab active:cursor-grabbing select-none ${
              isTransitioning ? 'transform scale-95 opacity-90' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              touchStartX.current = 0;
              touchEndX.current = 0;
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-primary/30" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={`star-${currentTestimonial}-${i}`} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
                <Badge variant="secondary" className="mt-2">
                  {testimonials[currentTestimonial].program}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Swipe Indicators */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <div
              key={`indicator-${index}`}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
