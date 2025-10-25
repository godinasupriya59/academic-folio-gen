import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack",
      issuer: "AICTE–Eduskills",
      date: "2024",
      link: "#",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      link: "#",
    },
    {
      title: "Data Structures with Java",
      issuer: "LeapTalento",
      date: "2024",
      link: "#",
    },
    {
      title: "AWS Academy - Generative AI",
      issuer: "AWS Academy",
      date: "2024",
      link: "#",
    },
    {
      title: "Infosys Springboard: Pragati-Path to Future",
      issuer: "Infosys",
      date: "2024",
      link: "#",
    },
    {
      title: "HTML5, CSS3, JavaScript, Java Programming",
      issuer: "Various Platforms",
      date: "2023-2024",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {cert.date}
                        </span>
                        <Button variant="ghost" size="sm" className="gap-2 h-8">
                          <ExternalLink className="w-3 h-3" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
