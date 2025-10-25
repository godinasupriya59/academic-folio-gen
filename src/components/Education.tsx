import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      gpa: "3.8/4.0",
      highlights: [
        "Relevant coursework: Data Structures, Algorithms, Database Management, Web Development",
        "Dean's List: Fall 2022, Spring 2023",
        "Active member of Computer Science Society",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "School Name",
      period: "2019 - 2021",
      gpa: "95%",
      highlights: [
        "Specialized in Science stream",
        "School topper in Computer Science",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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

export default Education;
