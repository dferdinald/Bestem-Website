import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";

const CallToAction = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center bg-primary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your STEM Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Every program is project-driven, ensuring learners leave not just with knowledge — but with real skills and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Enroll Now
            </Button>
          </div>
        </div>
        
        <RegistrationModal open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen} />
      </div>
    </section>
  );
};

export default CallToAction;

