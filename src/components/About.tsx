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
                    I am a dedicated final-year Computer Science student with a strong foundation in 
                    software development, algorithms, and problem-solving. Throughout my academic journey, 
                    I have consistently demonstrated a commitment to excellence and a passion for learning 
                    new technologies. My goal is to leverage my skills to contribute meaningfully to 
                    innovative projects and organizations.
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
                  Specializing in full-stack development, data structures, and algorithm design. 
                  I enjoy building efficient solutions and exploring emerging technologies.
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
                  I believe in continuous learning, collaborative problem-solving, and maintaining 
                  a growth mindset in everything I do.
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
