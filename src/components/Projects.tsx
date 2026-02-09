import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Server, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    // {
    //   title: "Blood Donation Website",
    //   subtitle: "Full-Stack Developer | React.js, MongoDB, Express.js, Socket.IO",
    //   description: [
    //     "Automated blood donation camp management, reducing manual record-keeping effort by 80%",
    //     "Displayed live donor statistics using Socket.IO, improving transparency and boosting engagement",
    //     "Enabled OTP-based pre-registration and donor authentication, ensuring secure and smooth onboarding",
    //     "Visualized donation metrics with interactive graphs; added exportable reports to support data-driven planning",
    //     "Designed a responsive UI showcasing camp info, awareness content, infographics, and gallery"
    //   ],
    //   technologies: ["React.js", "MongoDB", "Express.js", "Socket.IO"],
    //   icon: <Globe className="w-5 h-5" />,
    //   github: "https://blooddonation-project.vercel.app/",
    //   linkType: "live" as const
    // },
    {
      title: "College Clubs Management App",
      subtitle: "Backend Developer | OAuth, Spring Data JPA, Spring Security, MySQL",
      description: [
        "Developed core functionalities for event scheduling and club membership management to streamline communication and operations",
        "Designed RESTful APIs to facilitate efficient data handling and ensure smooth integration with the frontend",
        "Utilized MongoDB to create a scalable and optimised database structure for reliable data storage and fast retrieval"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      icon: <Server className="w-5 h-5" />,
      // github: "https://github.com/prudvi-satya-teja/aclub",
      // linkType: "github" as const
    },
    {
      title: "Leez Connect",
      subtitle: "Backend Developer | Node.js, Express, MongoDB",
      description: [
        "Designed and implemented a rental platform backend with normalized MongoDB schemas for owners, customers, products, trips",
        "Developed secure REST APIs for core functionalities including bookings, trip tracking",
        "Integrated advanced features such as feedback, favourite systems and structured data linking through references to ensure data consistency and high performance"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      icon: <Server className="w-5 h-5" />,
      github: "https://github.com/prudvi-satya-teja/leez-app",
      linkType: "github" as const
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Innovative projects showcasing expertise in backend development and full-stack applications
          </p>
        </div>

        {/* Projects - Vertical Layout */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in hover:shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {project.icon}
                          <CardTitle className="text-lg sm:text-xl text-foreground">{project.title}</CardTitle>
                        </div>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20 w-fit">
                          Completed
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base text-primary font-medium">{project.subtitle}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 w-full sm:w-fit min-h-[44px]"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      {project.linkType === 'live' ? (
                        'Live Link'
                      ) : (
                        <>
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                {/* Key Features & Achievements */}
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-foreground">Key Features & Achievements</h4>
                  <ul className="space-y-2">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1.5 border border-teal-400 text-teal-400 rounded-md 
                                 text-xs sm:text-sm font-medium hover:border-teal-300 hover:text-teal-300 
                                 transition-all duration-300 cursor-default bg-transparent min-h-[32px] 
                                 flex items-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
