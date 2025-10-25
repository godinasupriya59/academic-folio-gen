import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates, role-based access control, and analytics dashboard.",
      technologies: ["JavaScript", "Firebase", "Tailwind CSS"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides current weather and 7-day forecasts using external APIs with location-based services.",
      technologies: ["React", "API Integration", "CSS"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Algorithm Visualizer",
      description:
        "An educational tool to visualize sorting and searching algorithms, helping students understand algorithmic concepts interactively.",
      technologies: ["Python", "Django", "JavaScript"],
      links: {
        github: "#",
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
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
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
