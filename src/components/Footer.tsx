import { ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2023 PhishGuard Project. For educational purposes only.</p>
          <a 
            href="https://github.com/yourusername/phishguard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline mt-2"
          >
            View on GitHub <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </footer>
    )
}

export default Footer;