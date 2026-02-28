import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

const PortfolioPage: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto py-16 px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Portfolio - Muhilan Freelance Web Developer</title>
                <meta name="description" content="Explore Muhilan's freelance web development portfolio, showcasing a range of modern web applications and projects." />
            </Helmet>

            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                My <span className="text-primarylw">Portfolio</span>
            </motion.h1>

            <motion.p
                className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                A collection of my recent work, demonstrating my expertise in building modern, responsive, and performant web applications. Each project reflects my commitment to quality and user-centric design.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
