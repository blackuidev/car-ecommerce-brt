import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        image: string;
        tags: string[];
        liveLink?: string;
        githubLink?: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            className="h-full"
        >
            <Card className="flex flex-col h-full overflow-hidden">
                <CardHeader className="p-0">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                    {project.liveLink && (
                        <Button variant="outline" size="sm" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                    )}
                    {/* Add GitHub link if available */}
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
