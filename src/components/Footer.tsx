import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 Prudvi Satya Teja Bachala. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/prudvi-satya-teja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prudvi-satya-teja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:prudvisatyateja1234@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;