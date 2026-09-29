import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Users, CreditCard, Calendar } from "lucide-react";

const EnrollmentProcess = () => {
  const enrollmentSteps = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Browse our programs and select the one that matches your age, interests, and goals.",
      icon: FileText,
      color: "primary",
      action: "Browse Programs",
      details: ["Review program details", "Check age requirements", "Consider schedule options"]
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete our simple online application form with basic information and program preferences.",
      icon: Users,
      color: "innovation",
      action: "Apply Online",
      details: ["Fill application form", "Upload required documents", "Select preferred schedule"]
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Participate in a brief assessment and friendly interview to ensure the best program fit.",
      icon: CheckCircle,
      color: "accent",
      action: "Schedule Assessment",
      details: ["Online or in-person assessment", "Meet with program coordinator", "Discuss learning goals"]
    },
    {
      step: 4,
      title: "Secure Your Spot",
      description: "Complete enrollment with payment and receive your welcome package with all program details.",
      icon: CreditCard,
      color: "success",
      action: "Complete Payment",
      details: ["Choose payment option", "Receive confirmation", "Get welcome materials"]
    }
  ];

  const requirements = [
    "Completed application form",
    "Copy of birth certificate or ID",
    "Recent passport-sized photograph",
    "Parent/guardian contact information",
    "Medical information (if applicable)",
    "Previous STEM experience (optional)"
  ];

  const faqs = [
    {
      question: "What age groups do you accept?",
      answer: "We offer programs for ages 5 and above, with age-appropriate curriculum for each group."
    },
    {
      question: "Do I need prior STEM experience?",
      answer: "No prior experience required for foundation programs. We have programs for all skill levels."
    },
    {
      question: "What if I miss a class?",
      answer: "We offer makeup sessions and provide recorded materials for missed classes."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer need-based and merit-based scholarships. Apply early for best consideration."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Enrollment Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your <span className="text-primary">STEM Journey</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started is easy! Follow our simple 4-step enrollment process and join 
            hundreds of students already transforming their futures.
          </p>
        </div>

        {/* Enrollment Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-white relative"
              >
                <div className={`absolute -top-4 left-6 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {step.step}
                </div>
                
                <CardContent className="p-6 pt-8">
                  <div className="mb-4">
                    <div className={`p-3 rounded-lg bg-${step.color}/10 inline-block`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-1 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-${step.color} rounded-full`}></div>
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <Card className="bg-white shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Application Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-gradient-card rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Our enrollment team is here to assist you through every step of the process.
                </p>
                <Button variant="outline" size="sm">
                  Contact Enrollment Team
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="bg-white shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="w-full">
                  View All FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;
