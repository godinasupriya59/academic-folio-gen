import { GraduationCap, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))`,
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Godina Supriya
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            B.Tech Computer Science (AIML) Student
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detail-oriented and enthusiastic B.Tech student with expertise in Java, SQL, HTML, CSS, and JavaScript. 
            Skilled in developing scalable applications, database-driven systems, and interactive web interfaces.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:goadinasupriya20@gmail.com">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/godinasupriya59" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/godinasupriya" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
