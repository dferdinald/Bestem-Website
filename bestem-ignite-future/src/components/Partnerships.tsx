import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Globe, Award, Users } from "lucide-react";

const Partnerships = () => {
  const partners = [
    { name: "MIT", type: "Academic", description: "Research collaboration and curriculum development" },
    { name: "UNESCO", type: "International", description: "Education innovation and global best practices" },
    { name: "Google for Education", type: "Technology", description: "Digital tools and teacher training" },
    { name: "Microsoft Education", type: "Technology", description: "Cloud services and certification programs" },
    { name: "Ghana Ministry of Education", type: "Government", description: "Policy alignment and national programs" },
    { name: "UNICEF Ghana", type: "International", description: "Child education and development initiatives" }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Partnerships
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Collaborating for <span className="text-primary">Greater Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <h3 className="font-bold text-foreground">{partner.name}</h3>
                    <Badge variant="secondary" className="text-xs">{partner.type}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
