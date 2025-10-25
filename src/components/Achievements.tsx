import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "First Place - University Hackathon 2024",
      description:
        "Won first place among 50+ teams for developing an innovative healthcare management system.",
    },
    {
      icon: Medal,
      title: "Dean's List Recognition",
      description:
        "Consistently maintained GPA above 3.7 and received Dean's List honors for three consecutive semesters.",
    },
    {
      icon: Star,
      title: "Best Student Project Award",
      description:
        "Received department recognition for outstanding final year project on AI-powered recommendation systems.",
    },
    {
      icon: Trophy,
      title: "State Level Coding Competition - Runner Up",
      description:
        "Secured second position in state-level coding competition with 200+ participants.",
    },
    {
      icon: Star,
      title: "Published Research Paper",
      description:
        "Co-authored a paper on machine learning applications in cybersecurity, accepted at university conference.",
    },
    {
      icon: Medal,
      title: "Open Source Contribution",
      description:
        "Made significant contributions to 3 open-source projects with over 50+ merged pull requests.",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
