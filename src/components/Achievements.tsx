import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Trophy, ExternalLink, Star } from "lucide-react";
import awsCertified from "@/assets/aws-certified.png";
import hackerrankProblemSolving from "@/assets/hackerrank-problem-solving.png";
import hackerrankSql from "@/assets/hackerrank-sql.png";
import javaCertified from "@/assets/java-certified.png";
import redhatCertified from "@/assets/redhat-certified.png";

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "June 2025",
      image: awsCertified,
      description: "Industry-recognized credential validating cloud computing fundamentals and AWS services.",
      validationNumber: "7e591a0a5a8a4f3fa80164b30b145ee3"
    },
    {
      title: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      date: "June 2024",
      image: redhatCertified,
      description: "Professional certification demonstrating Linux system administration skills.",
      certificationId: "240-111-286"
    },
    {
      title: "Pearson IT Specialist - Java",
      issuer: "Pearson VUE",
      date: "July 2024",
      image: javaCertified,
      description: "Industry-recognized credential validating proficiency in Java programming fundamentals.",
      verificationCode: "wmWoC-48Ju"
    },
    {
      title: "HackerRank Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "August 2024",
      image: hackerrankProblemSolving,
      description: "Demonstrates strong problem-solving skills with data structures and algorithms.",
      certificationId: "34238001A133"
    },
    {
      title: "HackerRank SQL (Intermediate)",
      issuer: "HackerRank",
      date: "May 2025",
      image: hackerrankSql,
      description: "Validates database querying and management skills with complex SQL operations.",
      certificationId: "3CF5BD669A75"
    }
  ];

  const competitiveAchievements = [
    {
      platform: "LeetCode",
      achievement: "700+ problems solved",
      rating: "Max Rating: 1780",
      highlight: "Top 1120 globally in March 2025 contest (30,000+ participants)",
      icon: "🏆",
      link: "https://leetcode.com/u/Dra-Carys/"
    },
    {
      platform: "CodeChef",
      achievement: "3 Star Rating",
      rating: "Max Rating: 1618",
      highlight: "Consistent performance in monthly contests",
      icon: "⭐",
      link: "https://www.codechef.com/users/dra_ca_rys"
    },
    {
      platform: "Codeforces",
      achievement: "Pupil Rating",
      rating: "Max Rating: 1234",
      highlight: "Active participant in Div 2 contests",
      icon: "🎯",
      link: "https://codeforces.com/profile/Dra-Carys"
    },
    {
      platform: "GeeksforGeeks",
      achievement: "3 Star Rating",
      rating: "Max Rating: 1686",
      highlight: "Regular problem solver and contributor",
      icon: "💻",
      link: "https://www.geeksforgeeks.org/user/dracaris/"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and competitive programming achievements that showcase my technical expertise.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title} 
                className="card-hover bg-card border-primary/10 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  {cert.validationNumber && (
                    <p className="text-xs text-muted-foreground">
                      Validation: {cert.validationNumber}
                    </p>
                  )}
                  {cert.certificationId && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.certificationId}
                    </p>
                  )}
                  {cert.verificationCode && (
                    <p className="text-xs text-muted-foreground">
                      Verification: {cert.verificationCode}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Programming */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Competitive Programming
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competitiveAchievements.map((achievement, index) => (
              <Card 
                key={achievement.platform}
                className="card-hover bg-card border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="text-lg">{achievement.platform}</h4>
                      <p className="text-sm text-primary font-medium">{achievement.achievement}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{achievement.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.highlight}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    onClick={() => window.open(achievement.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;