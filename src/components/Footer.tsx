import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-muted-foreground">
              Feel free to reach out for opportunities, collaborations, or just a friendly chat!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Email</span>
              <a
                href="mailto:your.email@example.com"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                your.email@example.com
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Phone</span>
              <a
                href="tel:+1234567890"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="text-sm font-medium">City, Country</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
