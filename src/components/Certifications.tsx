import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "June 2025",
      description: "Industry-recognized credential validating cloud computing fundamentals and AWS services",
      validationId: "7e591a0a5a8a4f3fa80164b30b145ee3",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      date: "June 2024",
      description: "Professional certification demonstrating Linux system administration skills",
      certificationId: "240-111-286",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Pearson IT Specialist - Java",
      issuer: "Pearson VUE",
      date: "July 2024",
      description: "Industry-recognized credential validating proficiency in Java programming fundamentals",
      verificationCode: "wmWoC-48Ju",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "HackerRank Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "August 2024",
      description: "Demonstrates strong problem-solving skills with data structures and algorithms",
      certificationId: "34238001A133",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "HackerRank SQL (Intermediate)",
      issuer: "HackerRank",
      date: "May 2025",
      description: "Validates database querying and management skills with complex SQL operations",
      certificationId: "3CF5BD669A75",
      icon: <Award className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="accent relative">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="card-hover bg-card border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{cert.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                      <Badge variant="outline" className="text-xs border-primary/20">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="space-y-1">
                  {cert.validationId && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Validation:</span> {cert.validationId}
                    </p>
                  )}
                  {cert.certificationId && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">ID:</span> {cert.certificationId}
                    </p>
                  )}
                  {cert.verificationCode && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Verification:</span> {cert.verificationCode}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;