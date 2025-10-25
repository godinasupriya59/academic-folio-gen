import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Feedback Form",
      description:
        "A fully responsive web application designed for students and teachers to submit feedback. Features include front-end form validation, secure database connectivity, and comprehensive feedback reporting system. Implemented back-end logic using SQL queries with dynamic elements for improved user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL"],
      links: {
        github: "https://github.com/godinasupriya59",
      },
    },
    {
      title: "Restaurant Website",
      description:
        "A responsive multi-page restaurant website featuring menu, gallery, contact, and feedback sections. Built with semantic HTML5 and modern CSS3, ensuring mobile and tablet compatibility through media queries. Clean UI design with modular CSS architecture.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      links: {
        github: "https://github.com/godinasupriya59",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
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

export default Projects;
