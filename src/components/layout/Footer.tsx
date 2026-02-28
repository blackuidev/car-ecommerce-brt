import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/components/lib/utils';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn(
            "w-full border-t bg-background/80 backdrop-blur-sm",
            "py-8 px-4 md:px-6 mt-16"
        )}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <Link to="/" className="text-xl font-bold text-primarylw">
                        Muhilan Portfolio
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2">
                        &copy; {currentYear} Muhilan. All rights reserved.
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                    <Link to="/about" className="text-sm font-medium text-foreground hover:text-primarylw transition-colors">
                        About
                    </Link>
                    <Link to="/portfolio" className="text-sm font-medium text-foreground hover:text-primarylw transition-colors">
                        Portfolio
                    </Link>
                    <Link to="/services" className="text-sm font-medium text-foreground hover:text-primarylw transition-colors">
                        Services
                    </Link>
                    <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primarylw transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primarylw transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primarylw transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primarylw transition-colors">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primarylw transition-colors">
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
