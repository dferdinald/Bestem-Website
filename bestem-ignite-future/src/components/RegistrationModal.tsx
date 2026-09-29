import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import emailjs from '@emailjs/browser';

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedProgram?: string;
  preSelectedDay?: string;
  preSelectedTime?: string;
}

interface Child {
  id: string;
  name: string;
  age: string;
  program: string;
  preferredDay: string;
  preferredTime: string;
}

const RegistrationModal = ({ open, onOpenChange, preSelectedProgram, preSelectedDay, preSelectedTime }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const [children, setChildren] = useState<Child[]>([
    { id: "1", name: "", age: "", program: preSelectedProgram || "", preferredDay: preSelectedDay || "", preferredTime: preSelectedTime || "" }
  ]);

  // Update first child's program, day, and time when preSelected values change
  useEffect(() => {
    if ((preSelectedProgram || preSelectedDay || preSelectedTime) && open) {
      setChildren(prev => {
        const updated = [...prev];
        if (updated[0]) {
          if (preSelectedProgram) updated[0].program = preSelectedProgram;
          if (preSelectedDay) updated[0].preferredDay = preSelectedDay;
          if (preSelectedTime) updated[0].preferredTime = preSelectedTime;
        }
        return updated;
      });
    }
  }, [preSelectedProgram, preSelectedDay, preSelectedTime, open]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChildChange = (id: string, field: keyof Child, value: string) => {
    setChildren(prev => prev.map(child => 
      child.id === id ? { ...child, [field]: value } : child
    ));
  };

  const addChild = () => {
    const newId = (children.length + 1).toString();
    setChildren(prev => [...prev, { id: newId, name: "", age: "", program: "", preferredDay: "", preferredTime: "" }]);
  };

  const removeChild = (id: string) => {
    if (children.length > 1) {
      setChildren(prev => prev.filter(child => child.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare children details
      const childrenDetails = children.map((child, index) => `
Child ${index + 1}:
  Name: ${child.name}
  Age: ${child.age}
  Preferred Program: ${child.program}
  Preferred Day: ${child.preferredDay}
  Preferred Time: ${child.preferredTime}
      `).join('\n');

      // Prepare template parameters for EmailJS
      const templateParams = {
        parent_name: formData.parentName,
        parent_email: formData.email,
        parent_phone: formData.phone,
        parent_address: formData.address,
        children_details: childrenDetails,
        message: formData.message || "None provided",
        submission_date: new Date().toLocaleString()
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_wk3fme4', // Service ID
        'template_qmxcm8f', // Template ID for student registration
        templateParams,
        'XwWuk1UfN7yO6_GJk' // Public Key
      );
      
      setShowSuccess(true);
      
      toast({
        title: "Registration Submitted!",
        description: "We've received your registration. Our team will contact you within 24 hours.",
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          address: "",
          message: ""
        });
        setChildren([{ id: "1", name: "", age: "", program: "", preferredDay: "", preferredTime: "" }]);
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Enroll Your Child(ren)</DialogTitle>
              <DialogDescription>
                Fill out the form below to register your child(ren) aged 5+. We'll contact you within 24 hours to discuss enrollment.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Parent Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  Parent/Guardian Information
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="parentName">Full Name *</Label>
                  <Input
                    id="parentName"
                    placeholder="Enter your full name"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange("parentName", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Home Address *</Label>
                  <Input
                    id="address"
                    placeholder="Enter your home address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
              </div>

              <Separator />

              {/* Children Information */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Child(ren) Information
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addChild}
                    className="flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Another Child
                  </Button>
                </div>

                {children.map((child, index) => (
                  <div key={child.id} className="space-y-4 p-4 border border-border rounded-lg bg-muted/20">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">Child {index + 1}</h4>
                      {children.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeChild(child.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`childName-${child.id}`}>Child's Name *</Label>
                        <Input
                          id={`childName-${child.id}`}
                          placeholder="Full name"
                          value={child.name}
                          onChange={(e) => handleChildChange(child.id, "name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`childAge-${child.id}`}>Age *</Label>
                        <Input
                          id={`childAge-${child.id}`}
                          type="number"
                          placeholder="5+"
                          min="5"
                          max="18"
                          value={child.age}
                          onChange={(e) => handleChildChange(child.id, "age", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`program-${child.id}`}>Program *</Label>
                          <Select 
                            onValueChange={(value) => handleChildChange(child.id, "program", value)} 
                            value={child.program}
                            required
                          >
                            <SelectTrigger id={`program-${child.id}`}>
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="STEM Foundations">STEM Foundations</SelectItem>
                              <SelectItem value="Innovation Labs">Innovation Labs</SelectItem>
                              <SelectItem value="Coding & Tech Skills">Coding & Tech</SelectItem>
                              <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                              <SelectItem value="Engineering & Robotics">Engineering & Robotics</SelectItem>
                              <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                              <SelectItem value="Not Sure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`day-${child.id}`}>Preferred Day *</Label>
                          <Select 
                            onValueChange={(value) => handleChildChange(child.id, "preferredDay", value)} 
                            value={child.preferredDay}
                            required
                          >
                            <SelectTrigger id={`day-${child.id}`}>
                              <SelectValue placeholder="Select day" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Saturday">Saturday</SelectItem>
                              <SelectItem value="Sunday">Sunday</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`time-${child.id}`}>Preferred Time *</Label>
                        <Select 
                          onValueChange={(value) => handleChildChange(child.id, "preferredTime", value)} 
                          value={child.preferredTime}
                          required
                        >
                          <SelectTrigger id={`time-${child.id}`}>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="10:00 AM - 2:00 PM">10:00 AM - 2:00 PM</SelectItem>
                            <SelectItem value="11:00 AM - 2:00 PM">11:00 AM - 2:00 PM</SelectItem>
                            <SelectItem value="1:00 PM - 5:00 PM">1:00 PM - 5:00 PM</SelectItem>
                            <SelectItem value="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</SelectItem>
                            <SelectItem value="2:00 PM - 6:00 PM">2:00 PM - 6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requirements, questions, or additional information..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-success/10 p-4 rounded-full">
                <CheckCircle className="w-16 h-16 text-success" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Registration Successful!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for enrolling your child(ren) at BeSTEM Innovation Hub! We've received your registration and our team will contact you within 24 hours.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Check your email for confirmation and next steps. We look forward to starting this STEM journey with your family!
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;

