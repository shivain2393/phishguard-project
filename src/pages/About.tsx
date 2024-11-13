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
              PhishGuard is an innovative cybersecurity project developed to combat the rising threat of phishing attacks. This comprehensive solution was designed and built by a dedicated team of developers and researchers:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">The Team</h2>
              <div className="space-y-4">
                <div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Shivain Sagar</li>
                    <li>Tarun Singh Negi</li>
                    <li>Sachin</li>
                    <li>Justin Johnson</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium pb-2">Mentor</h3>
                  <ul className=" list-disc list-inside space-y-2">
                    <li>
                      Professor Koyel Datta Gupta
                    </li>
                  </ul>
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
                  href="https://github.com/shivain2393/phishguard-project"
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
