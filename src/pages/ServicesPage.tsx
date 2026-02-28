import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/components/lib/utils';

interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className, ...props }) => {
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent className={cn("h-8 w-8 text-primarylw", className)} {...props} />;
};

const ServicesPage: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto py-16 px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Services - Muhilan Freelance Web Developer</title>
                <meta name="description" content="Discover the range of freelance web development services offered by Muhilan, including frontend, backend, and full-stack solutions." />
            </Helmet>

            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                My <span className="text-primarylw">Services</span>
            </motion.h1>

            <motion.p
                className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                I offer a comprehensive suite of web development services designed to help businesses and individuals establish a strong and effective online presence. From concept to deployment, I ensure a seamless and collaborative process.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        className="h-full"
                    >
                        <Card className="flex flex-col items-center text-center p-6 h-full">
                            <CardHeader className="pb-4">
                                {service.icon && <ServiceIcon name={service.icon} />}
                                <CardTitle className="mt-4 text-2xl font-semibold">{service.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow text-muted-foreground">
                                {service.description}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesPage;
