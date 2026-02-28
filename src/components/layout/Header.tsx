import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/components/lib/utils';

const Header: React.FC = () => {
    return (
        <header className={cn(
            "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm",
            "flex items-center justify-between h-16 px-4 md:px-6"
        )}>
            <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2 text-lg font-bold text-primarylw">
                    <Car className="h-6 w-6" />
                    <span>CarShop</span>
                </Link>
            </div>
            <nav className="flex items-center space-x-4">
                <Button variant="ghost" asChild>
                    <Link to="/">
                        <Home className="mr-2 h-4 w-4" />
                        Home
                    </Link>
                </Button>
            </nav>
        </header>
    );
};

export default Header;
