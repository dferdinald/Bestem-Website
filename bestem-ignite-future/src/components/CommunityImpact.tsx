import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, School, Heart } from "lucide-react";

const CommunityImpact = () => {
  const impactMetrics = [
    { icon: Users, number: "500+", label: "Students Reached", description: "Across all programs and initiatives" },
    { icon: School, number: "15+", label: "Partner Schools", description: "Collaborating to expand STEM access" },
    { icon: Heart, number: "10+", label: "Communities Served", description: "Through outreach programs" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Community Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Measuring Our <span className="text-primary">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="text-center bg-white shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <metric.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
