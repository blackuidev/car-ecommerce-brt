import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, LayoutGrid, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/components/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Services', href: '/services', icon: LayoutGrid },
    { name: 'Contact', href: '/contact', icon: Mail },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 100, damping: 15 } },
        exit: { opacity: 0, x: "100%" }
    };

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm",
            "flex items-center justify-between h-16 px-4 md:px-6"
        )}>
            <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 text-lg font-bold text-primarylw">
                    <span className="text-xl">Muhilan</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                    <Button key={item.name} variant="ghost" asChild>
                        <Link to={item.href} className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                        </Link>
                    </Button>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        {navItems.map((item) => (
                            <Button key={item.name} variant="ghost" size="lg" asChild onClick={toggleMenu}>
                                <Link to={item.href} className="flex items-center text-2xl">
                                    <item.icon className="mr-3 h-6 w-6" />
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

