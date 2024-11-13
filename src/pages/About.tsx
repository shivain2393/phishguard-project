import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              About PhishGuard
            </CardTitle>
            <CardDescription className="text-center">
              Protecting users from phishing attacks through education and
              technology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-muted-foreground">
                PhishGuard aims to empower internet users with the knowledge and
                tools to identify and avoid phishing attempts. By combining
                cutting-edge technology with user education, we strive to create
                a safer online environment for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">The Team</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Project Creator</h3>
                  <p className="text-muted-foreground">
                    Jane Doe - Cybersecurity Enthusiast and Full-Stack Developer
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Mentor</h3>
                  <p className="text-muted-foreground">
                    Dr. John Smith - Professor of Computer Science, XYZ
                    University
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Project Goals</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Develop an accurate and user-friendly tool for identifying
                  potential phishing URLs
                </li>
                <li>
                  Educate users about the dangers of phishing and how to protect
                  themselves
                </li>
                <li>
                  Contribute to the open-source community by sharing our
                  research and code
                </li>
                <li>
                  Collaborate with cybersecurity experts to improve our
                  detection algorithms
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
              <p className="text-muted-foreground mb-4">
                We welcome contributions from developers, cybersecurity experts,
                and anyone passionate about online safety. Check out our GitHub
                repository to learn how you can contribute to the project.
              </p>
              <Button asChild>
                <a
                  href="https://github.com/yourusername/phishguard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </section>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2023 PhishGuard Project. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
