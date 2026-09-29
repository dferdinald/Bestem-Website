import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        subscriber_email: email,
        subscription_date: new Date().toLocaleString()
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_wk3fme4', // Service ID
        'template_0q49kpt', // Template ID for newsletter subscription
        templateParams,
        'XwWuk1UfN7yO6_GJk' // Public Key
      );
      
      setIsSubscribed(true);
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. Check your email for confirmation.",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-primary text-white mt-6">
      <CardContent className="p-6 text-center">
        {!isSubscribed ? (
          <>
            <div className="flex justify-center mb-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2">Stay Connected</h4>
            <p className="text-white/90 text-sm mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-foreground bg-white/90 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button 
                type="submit"
                variant="hero" 
                className="w-full bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-4">
            <div className="flex justify-center mb-3">
              <div className="bg-accent/20 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2">You're Subscribed!</h4>
            <p className="text-white/90 text-sm">
              Thank you for joining our newsletter.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;

