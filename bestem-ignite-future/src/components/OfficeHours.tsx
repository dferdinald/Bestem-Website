import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Calendar } from "lucide-react";

const OfficeHours = () => {
  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM", type: "Office Hours" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM", type: "Classes & Office" },
    { day: "Sunday", hours: "1:00 PM - 6:00 PM", type: "Classes Only" }
  ];

  const contactMethods = [
    {
      title: "Phone Support",
      description: "Call us for quick questions and enrollment support",
      icon: Phone,
      availability: "Monday - Saturday, 8:00 AM - 8:00 PM"
    },
    {
      title: "Email Inquiries",
      description: "Send us your questions and we'll respond promptly",
      icon: MapPin,
      availability: "Response within 24 hours"
    },
    {
      title: "Scheduled Meetings",
      description: "Book a dedicated time slot for detailed discussions",
      icon: Calendar,
      availability: "By appointment, flexible timing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Office Hours & <span className="text-primary">Availability</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here when you need us. Find the best time to connect with our team 
            for support, information, or just to see our facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Hours */}
          <Card className="bg-white shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-foreground">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{schedule.hours}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white">
                <h4 className="font-semibold mb-2">Location</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 text-accent" />
                  <div>
                    <div>BeSTEM Innovation Hub</div>
                    <div className="text-white/90 text-sm">43 Bathur Street</div>
                    <div className="text-white/90 text-sm">East Legon, Accra</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="bg-white shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">How to Reach Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                      <div className="text-xs text-primary font-semibold">{method.availability}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Emergency Contact</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For urgent matters outside office hours:
                </p>
                <div className="space-y-1">
                  <div className="text-primary font-semibold">+233 53 048 6661</div>
                  <div className="text-primary font-semibold">+233 59 245 5824</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;
