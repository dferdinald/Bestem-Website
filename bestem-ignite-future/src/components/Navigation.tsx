import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Lightbulb } from "lucide-react";
import RegistrationModal from "./RegistrationModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Vision", href: "/vision" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/BeSTEM_logo-removebg-preview.png" 
              alt="BeSTEM Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-primary whitespace-nowrap">BeSTEM Innovation Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-all relative ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <Button 
              variant="hero" 
              size="default" 
              onClick={() => setIsRegistrationOpen(true)}
              className="ml-4 shadow-md hover:shadow-lg transition-shadow"
            >
              Get Started
            </Button>
          </div>
          
          <RegistrationModal open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen} />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-white">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium transition-colors ${
                      isActive 
                        ? "text-primary font-semibold" 
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button 
                variant="hero" 
                size="default" 
                className="self-start shadow-md"
                onClick={() => {
                  setIsRegistrationOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;