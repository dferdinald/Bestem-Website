import { Lightbulb, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/BeSTEM_logo-removebg-preview.png" 
                alt="BeSTEM Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold">BeSTEM Innovation Hub</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Igniting curiosity, innovation & leadership through STEM education. Creating tomorrow's changemakers today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-primary-foreground/80 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#programs" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Programs
              </a>
              <a href="#vision" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Vision & Mission
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">43 Bathur Street, East Legon</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <a 
                  href="mailto:besteminnovationhub@gmail.com" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  besteminnovationhub@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80 mt-1" />
                <div className="space-y-1">
                  <a 
                    href="tel:+233530486661" 
                    className="text-primary-foreground/80 hover:text-white transition-colors block"
                  >
                    +233 53 048 6661
                  </a>
                  <a 
                    href="tel:+233592455824" 
                    className="text-primary-foreground/80 hover:text-white transition-colors block"
                  >
                    +233 59 245 5824
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 BeSTEM Innovation Hub. Building the future through STEM education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;