import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, ExternalLink, Target, Code, Database } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "LeetCode Contest Rank 1120",
      category: "Competitive Programming",
      year: "2025",
      description: "Achieved rank 1120 in LeetCode contest demonstrating strong problem-solving skills",
      icon: <Trophy className="w-6 h-6 text-primary" />,
      link: "https://leetcode.com/u/Dra-Carys/"
    },
    {
      title: "CodeChef 3-Star Rating",
      category: "Competitive Programming", 
      year: "2024",
      description: "Achieved 3-star rating with peak rating of 1618 on CodeChef platform",
      icon: <Star className="w-6 h-6 text-primary" />,
      link: "https://www.codechef.com/users/dra_ca_rys"
    },
    {
      title: "Codeforces Pupil Level",
      category: "Competitive Programming",
      year: "2024", 
      description: "Reached Pupil level with rating of 1234 on Codeforces competitive programming platform",
      icon: <Target className="w-6 h-6 text-primary" />,
      link: "https://codeforces.com/profile/Dra-Carys"
    },
    {
      title: "700+ LeetCode Problems Solved",
      category: "Competitive Programming",
      year: "2024-2025",
      description: "Solved 600+ coding problems with contest rating of 1600+ demonstrating consistent problem-solving skills",
      icon: <Code className="w-6 h-6 text-primary" />,
      link: "https://leetcode.com/u/Dra-Carys/"
    },
    {
      title: "GeeksforGeeks 3-Star Rating",
      category: "Competitive Programming",
      year: "2024",
      description: "Achieved 3-star rating with peak rating of 1686 on GeeksforGeeks platform",
      icon: <Database className="w-6 h-6 text-primary" />,
      link: "https://www.geeksforgeeks.org/user/dracaris/"
    }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary">Recognition</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Recognition and accomplishments across various technical domains and competitions
          </p>
        </div>

        {/* Achievements Grid - Mobile first responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg leading-tight mb-2 break-words">{achievement.title}</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 min-h-[40px] text-xs sm:text-sm"
                  onClick={() => window.open(achievement.link, '_blank')}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Achievement Unlocked
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;