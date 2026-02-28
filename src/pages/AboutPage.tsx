import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences, skills } from '@/data/portfolio';
import { cn } from '@/components/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

// A simple component to render skill icons. Can be extended for Lucide icons or other custom SVGs.
const SkillIcon: React.FC<IconProps & { src?: string }> = ({ src, name, className, ...props }) => {
    if (src) {
        return <img src={src} alt={name} className={cn("h-6 w-6", className)} {...props} />;
    }
    // Fallback for text-based skills or if no icon is provided
    return <span className={cn("text-sm font-medium", className)}>{name}</span>;
};

const AboutPage: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto py-16 px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>About Muhilan - Freelance Web Developer</title>
                <meta name="description" content="Learn more about Muhilan, a freelance web developer's background, skills, and professional experience." />
            </Helmet>

            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                About <span className="text-primarylw">Muhilan</span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <motion.div
                    className="lg:col-span-2"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Who I Am</CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg text-muted-foreground space-y-4">
                            <p>
                                Hello! I'm Muhilan, a passionate and dedicated freelance web developer with a knack for building dynamic, user-friendly, and visually appealing web applications. With [X years] of experience in the industry, I specialize in bringing ideas to life through clean, efficient, and modern code.
                            </p>
                            <p>
                                My journey in web development began with a fascination for how interactive experiences are crafted online. This curiosity quickly evolved into a profession where I now enjoy tackling complex challenges and creating solutions that are not only functional but also delightful to use.
                            </p>
                            <p>
                                I thrive on continuous learning and staying updated with the latest technologies and best practices in the ever-evolving web landscape. Whether it's a sleek single-page application or a robust full-stack system, I am committed to delivering high-quality results that exceed client expectations.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>My Expertise</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                                    >
                                        <Badge className="py-2 px-3 flex items-center gap-2">
                                            <SkillIcon src={skill.icon} name={skill.name} />
                                            {skill.name}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <motion.section
                className="mb-16"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                    Work <span className="text-primarylw">Experience</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                                    <p className="text-muted-foreground">{exp.company} | {exp.duration}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Ready to <span className="text-primarylw">Collaborate</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I'm always excited to take on new challenges and contribute to impactful projects. Let's build something amazing together.
                </p>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
                >
                    <Link to="/contact">
                        <Button size="lg" className="py-3 px-8 text-lg">
                            Get in Touch
                        </Button>
                    </Link>
                </motion.div>
            </motion.section>
        </motion.div>
    );
};

export default AboutPage;
