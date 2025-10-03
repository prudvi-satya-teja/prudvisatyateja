import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  Settings,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "C++"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: ["React.js", "Node.js", "REST APIs", "Responsive Design", "Frontend Development"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Spring Boot", "REST API Design", "Database Integration", "Spring Security", "Spring Data JPA"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MySQL", "SQL", "Database Design", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-primary" />,
      skills: ["AWS Services", "Cloud Computing"]
    },
    {
      title: "Core Computer Science",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "DBMS", "Computer Networks"]
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Technologies and tools I work with to build amazing web applications.
          </p>
        </div>

        {/* Skills Grid - Mobile first responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/60 border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in
                         hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {category.icon}
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg 
                               text-xs sm:text-sm hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 
                               cursor-default font-medium shadow-sm min-h-[36px] flex items-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;