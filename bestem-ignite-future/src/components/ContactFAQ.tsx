import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      question: "What age groups do you serve?",
      answer: "We offer programs for students aged 5 and above, with age-appropriate curriculum designed for different developmental stages. Our programs are flexible and cater to learners from beginners to advanced levels."
    },
    {
      category: "Enrollment",
      question: "How do I enroll my child?",
      answer: "Enrollment is a simple 4-step process: 1) Choose your program, 2) Submit online application, 3) Complete assessment/interview, 4) Secure your spot with payment. Our enrollment team will guide you through each step."
    },
    {
      category: "Programs",
      question: "Do you offer online classes?",
      answer: "Yes! We offer both in-person and online program options. Our hybrid model allows students to access our curriculum remotely while still participating in hands-on projects through take-home kits."
    },
    {
      category: "Financial",
      question: "Are scholarships available?",
      answer: "Absolutely! We offer need-based scholarships (up to 100% coverage), merit-based scholarships, and various discount programs. We believe every child deserves access to quality STEM education regardless of financial circumstances."
    },
    {
      category: "Schedule",
      question: "What if my child misses a class?",
      answer: "We provide makeup sessions for missed classes and offer recorded materials for review. Our flexible scheduling ensures no student falls behind due to occasional absences."
    },
    {
      category: "Requirements",
      question: "Does my child need prior STEM experience?",
      answer: "No prior experience is required for our foundation programs. We assess each student's current level and provide appropriate support to ensure success regardless of their starting point."
    },
    {
      category: "Support",
      question: "What support do you provide to parents?",
      answer: "We provide regular progress reports, parent-teacher conferences, take-home project guidance, and resources to help parents support their child's STEM learning journey at home."
    },
    {
      category: "Location",
      question: "Where are you located?",
      answer: "We are located at 43 Bathur Street, East Legon, Accra. Contact us for detailed directions and information about our facilities and innovation labs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Got <span className="text-primary">Questions?</span> We Have Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find quick answers to the most common questions about our programs, 
            enrollment process, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="text-xs">
                        {faq.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
