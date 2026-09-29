import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/Bestem360", handle: "Bestem360" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/Bestem360", handle: "@Bestem360" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/Bestem360", handle: "Bestem360" },
    { name: "Twitter/X", icon: Twitter, url: "https://twitter.com/Bestem360", handle: "@Bestem360" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/bestem-innovation-hub", handle: "BeSTEM Innovation Hub" }
  ];

  return (
    <section id="get-in-touch" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Contact Information */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-primary font-semibold">
              Contact Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to connect with you! Reach out to learn more about our programs or to start your STEM journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">43 Bathur Street, East Legon</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-innovation/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-innovation" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:besteminnovationhub@gmail.com" className="text-innovation hover:underline">
                    besteminnovationhub@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-success/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone/WhatsApp</h4>
                  <div className="space-y-1">
                    <a href="tel:+233530486661" className="text-success hover:underline block">
                      +233 53 048 6661
                    </a>
                    <a href="tel:+233592455824" className="text-success hover:underline block">
                      +233 59 245 5824
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <Card className="p-8 shadow-card bg-white">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Follow Our Journey</CardTitle>
                <p className="text-muted-foreground">
                  Stay connected with BeSTEM on social media for updates, student projects, and inspiring STEM content.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm opacity-80">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;