import { Card } from "@/components/ui/card";
import { Code, Cloud, Settings, MessageCircle, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Text content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Highly motivated <span className="text-primary font-semibold">Computer Science student</span> with strong foundations in 
              <span className="text-primary font-semibold"> Java programming</span>, and data structures & algorithms.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Quick learner with <span className="text-primary">excellent communication skills</span> and proven 
              <span className="text-primary"> adaptability in dynamic technical environments</span>. Passionate about building scalable 
              solutions and continuously expanding my technical expertise.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science & Engineering with a focus on 
              <span className="text-primary"> backend development</span> and <span className="text-primary">software development</span>.
            </p>

            <div className="pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Education:</p>
              <p className="text-sm sm:text-base text-foreground font-medium">B.Tech CSE • CGPA: 8.82</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Aditya Engineering College, Surampalem</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-primary pt-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-mono text-xs sm:text-sm break-all">prudvisatyateja1234@gmail.com</span>
            </div>
          </div>

          {/* Right side - 2x2 grid of feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            <Card className="p-4 sm:p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Strong Foundations</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Solid understanding of Computer Science fundamentals and programming concepts
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Backend Expertise</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Hands-on experience with Spring Boot, Node.js and database technologies
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">DSA Skills</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Strong problem-solving abilities with data structures and algorithms
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Communication</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Excellent communication skills and team collaboration abilities
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;