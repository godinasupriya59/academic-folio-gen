import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Trophy, Heart } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Code,
      title: "Coding Club Member",
      organization: "University Coding Club",
      description:
        "Active participant in weekly coding challenges and hackathons. Organized workshop on web development fundamentals for juniors.",
      period: "2022 - Present",
    },
    {
      icon: Users,
      title: "Technical Team Lead",
      organization: "University Tech Fest 2024",
      description:
        "Led a team of 10 students in organizing technical events, including coding competitions and tech talks. Successfully managed over 500 participants.",
      period: "2023 - 2024",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      organization: "LeetCode & CodeChef",
      description:
        "Solved 200+ problems across various platforms. Participated in monthly contests and achieved 3-star rating on CodeChef.",
      period: "2021 - Present",
    },
    {
      icon: Heart,
      title: "Volunteer Coding Instructor",
      organization: "Local Community Center",
      description:
        "Teaching basic programming concepts to underprivileged students, helping them build foundational tech skills.",
      period: "2023 - Present",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Activities & Involvement
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-accent mb-2">
                          {activity.organization}
                        </p>
                        <p className="text-muted-foreground text-sm mb-3">
                          {activity.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                          {activity.period}
                        </span>
                      </div>
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

export default Activities;
