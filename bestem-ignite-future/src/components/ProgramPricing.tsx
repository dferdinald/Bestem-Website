import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { generateBrochurePDF } from "@/utils/generateBrochure";

const ProgramPricing = () => {
  const pricingPlans = [
    {
      name: "STEM Foundations",
      price: "₵800",
      duration: "12 weeks+",
      popular: false,
      description: "Perfect for beginners aged 5+",
      features: [
        "12+ weeks of hands-on learning",
        "All materials included",
        "Class sizes (10-30 students)",
        "Certificate upon completion",
        "Take-home projects",
        "Parent progress reports"
      ]
    },
    {
      name: "Innovation Labs",
      price: "₵1,200",
      duration: "12 weeks+",
      popular: true,
      description: "Advanced problem-solving for ages 5+",
      features: [
        "12+ weeks of intensive learning",
        "Access to innovation lab equipment",
        "Real-world project challenges",
        "Industry mentor sessions",
        "Portfolio development",
        "Showcase presentation opportunity"
      ]
    },
    {
      name: "Robotics & Engineering",
      price: "₵1,500",
      duration: "12 weeks+",
      popular: false,
      description: "Comprehensive robotics program",
      features: [
        "12+ weeks of robotics training",
        "Personal robotics kit included",
        "Competition preparation",
        "Advanced programming skills",
        "Engineering design process",
        "Industry certification pathway"
      ]
    },
    {
      name: "Coding & Tech Skills",
      price: "₵1,000",
      duration: "12 weeks+",
      popular: false,
      description: "Future-ready digital skills",
      features: [
        "12+ weeks of coding training",
        "HTML, CSS, JavaScript, Python",
        "Build web and mobile apps",
        "Personal project portfolio",
        "Version control basics",
        "Industry-standard tools"
      ]
    },
    {
      name: "AI & Machine Learning",
      price: "₵1,600",
      duration: "12 weeks+",
      popular: false,
      description: "Artificial intelligence fundamentals",
      features: [
        "12+ weeks of AI/ML training",
        "Python and ML libraries",
        "Build intelligent systems",
        "Data science fundamentals",
        "Industry AI tools access",
        "AI project portfolio"
      ]
    },
    {
      name: "Advanced Programming",
      price: "₵1,400",
      duration: "12 weeks+",
      popular: false,
      description: "Full-stack development mastery",
      features: [
        "12+ weeks of intensive coding",
        "Multiple programming languages",
        "Real-world project portfolio",
        "GitHub profile development",
        "Internship placement support",
        "Industry-standard tools access"
      ]
    }
  ];

  const scholarshipInfo = {
    title: "Scholarship Opportunities",
    description: "We believe every child deserves access to quality STEM education",
    options: [
      "Need-based scholarships (up to 100% coverage)",
      "Merit-based scholarships for exceptional students",
      "Community partnership discounts",
      "Sibling discounts (20% off second child)",
      "Early bird discounts (15% off if paid 2 weeks early)"
    ]
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Program Investment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Invest in Your <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quality STEM education that's accessible and affordable. Choose the program that fits your goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-white shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scholarship Information */}
        <Card className="bg-gradient-primary text-white max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{scholarshipInfo.title}</h3>
            <p className="text-white/90 mb-6 text-lg">{scholarshipInfo.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {scholarshipInfo.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 text-left">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">{option}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90">
                Apply for Scholarship
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Payment Plans Available
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All programs include materials, equipment access, and certification. 
            Payment plans available for all programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={generateBrochurePDF}>
              Download Fee Structure
            </Button>
            <Button variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPricing;
