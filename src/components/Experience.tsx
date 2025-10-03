import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "DSA Problem Setter Intern",
    company: "Technical Hub",
    location: "Offline",
    duration: "Jan 2025 – Feb 2025",
    type: "Internship",
    achievements: [
      "Designed and set 40+ coding problems covering diverse DSA topics",
      "Developed optimized solutions and comprehensive test cases",
      "Created well-structured problem statements with clear constraints",
      "Reviewed and debugged multiple approaches for solution robustness"
    ],
    technologies: [
      "Data Structures & Algorithms",
      "Problem-Solving",
      "Test Case Design",
      "Complexity Analysis",
      "C++",
      "Java",
      "Technical Content Writing"
    ]
  };

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in backend development and problem-solving
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/60 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    {experience.title}
                  </CardTitle>
                  <h3 className="text-lg font-semibold text-primary mb-1">{experience.company}</h3>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                  {experience.type}
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground text-lg">Key Achievements</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Skills Used */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground text-lg">Technologies & Skills Used</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 border border-primary/40 text-primary rounded-md text-sm
                               font-medium hover:border-primary hover:bg-primary/5 
                               transition-all duration-300 cursor-default bg-transparent"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;