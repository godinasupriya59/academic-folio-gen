import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, BookOpen, Briefcase } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      icon: Briefcase,
      category: "Career Goals",
      items: [
        "Secure a position as a Software Engineer at a reputed tech company",
        "Contribute to large-scale, impactful projects that serve millions of users",
        "Develop expertise in cloud computing and distributed systems",
      ],
    },
    {
      icon: BookOpen,
      category: "Learning Goals",
      items: [
        "Master advanced algorithms and system design principles",
        "Pursue certifications in cloud technologies (AWS, Azure, or GCP)",
        "Stay updated with emerging technologies like AI/ML and blockchain",
      ],
    },
    {
      icon: Target,
      category: "Short-term Goals",
      items: [
        "Complete final year project with distinction",
        "Contribute to 5+ open-source projects",
        "Build a strong professional network in the tech industry",
      ],
    },
    {
      icon: Rocket,
      category: "Long-term Vision",
      items: [
        "Become a technical leader and mentor for aspiring developers",
        "Create innovative solutions that solve real-world problems",
        "Pursue advanced degrees or specialized certifications in computer science",
      ],
    },
  ];

  return (
    <section id="goals" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Future Goals & Aspirations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{goal.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {goal.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent mt-1.5 flex-shrink-0">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Goals;
