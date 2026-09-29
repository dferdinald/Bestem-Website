import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare, Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const inquiryTypes = [
    "Program Information",
    "Enrollment Process",
    "Scholarship Opportunities",
    "Partnership Inquiry",
    "General Question",
    "Technical Support"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format contact message to use student registration template
      const messageContent = `
CONTACT FORM INQUIRY

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Inquiry Type: ${formData.inquiryType}

Subject: ${formData.subject}

Message:
${formData.message}

---
Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Prepare template parameters - reusing student registration template
      const templateParams = {
        parent_name: formData.name,
        parent_email: formData.email,
        parent_phone: formData.phone || "Not provided",
        parent_address: `Inquiry Type: ${formData.inquiryType} | Subject: ${formData.subject}`,
        children_details: messageContent,
        message: "Contact Form Inquiry",
        submission_date: new Date().toLocaleString()
      };

      // Send email using EmailJS with student registration template
      await emailjs.send(
        'service_wk3fme4', // Service ID
        'template_qmxcm8f', // Reusing student registration template
        templateParams,
        'XwWuk1UfN7yO6_GJk' // Public Key
      );
      
      setIsSuccess(true);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: ""
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try calling or emailing us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Start a <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Ready to enroll? Want to partner with us? 
            We'd love to hear from you and help you take the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="bg-success/10 p-4 rounded-full">
                        <CheckCircle className="w-16 h-16 text-success" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Inquiry Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      placeholder="Brief subject of your message"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="space-y-1">
                        <div className="text-white/90">+233 53 048 6661</div>
                        <div className="text-white/90">+233 59 245 5824</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-white/90">besteminnovationhub@gmail.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-foreground">Response Time</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email inquiries:</span>
                    <span className="font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone calls:</span>
                    <span className="font-semibold">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enrollment questions:</span>
                    <span className="font-semibold">Within 2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-foreground">Office Hours</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Available Monday - Saturday, 8:00 AM - 8:00 PM for all inquiries.
                </p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Monday - Friday: 8 AM - 6 PM</div>
                  <div>Saturday: 8 AM - 8 PM</div>
                  <div>Sunday: 1 PM - 6 PM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
