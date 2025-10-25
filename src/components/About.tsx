import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a detail-oriented and enthusiastic B.Tech student specializing in Computer Science with 
                    Artificial Intelligence and Machine Learning. With expertise in Java, SQL, HTML, CSS, and JavaScript, 
                    I am skilled in developing scalable applications, database-driven systems, and interactive web interfaces. 
                    I have a strong foundation in problem-solving, object-oriented programming, and database optimization, 
                    with hands-on experience through academic projects and the ability to work effectively in collaborative 
                    environments to deliver innovative solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-5 h-5 text-accent mt-1" />
                  <h3 className="text-lg font-semibold">My Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in web development, database management, and Java programming. 
                  I am passionate about developing responsive web applications and exploring AI and cloud technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-accent mt-1" />
                  <h3 className="text-lg font-semibold">My Approach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and delivering high-quality solutions. I focus on 
                  writing clean, efficient code and maintaining strong attention to detail in all my projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
