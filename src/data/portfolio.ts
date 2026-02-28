interface Skill {
    name: string;
    icon?: string; // Could be a path to an SVG or a Lucide icon name
}

interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string[];
}

interface Service {
    name: string;
    description: string;
    icon?: string; // Could be a path to an SVG or a Lucide icon name
}

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
}

export const skills: Skill[] = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer Motion", icon: "https://www.framer.com/images/logo.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

export const experiences: Experience[] = [
    {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2021 - Present",
        description: [
            "Led the development of a scalable e-commerce platform using React and TypeScript.",
            "Implemented state management with Redux Toolkit and integrated RESTful APIs.",
            "Mentored junior developers and conducted code reviews to ensure high code quality.",
        ],
    },
    {
        title: "Fullstack Developer",
        company: "Creative Agency LLC.",
        duration: "Jun 2018 - Dec 2020",
        description: [
            "Developed and maintained client websites using Node.js, Express, and MongoDB.",
            "Designed responsive user interfaces with Tailwind CSS and custom animations.",
            "Collaborated with designers to translate wireframes into interactive web applications.",
        ],
    },
];

export const services: Service[] = [
    {
        name: "Web Development",
        description: "Building responsive, high-performance, and secure web applications from scratch.",
        icon: "Laptop", // Lucide icon name
    },
    {
        name: "Frontend Development",
        description: "Crafting engaging user interfaces with React, Next.js, and modern CSS frameworks.",
        icon: "Code", // Lucide icon name
    },
    {
        name: "Backend Development",
        description: "Developing robust and scalable server-side applications with Node.js and various databases.",
        icon: "Server", // Lucide icon name
    },
    {
        name: "UI/UX Design",
        description: "Creating intuitive and visually appealing user experiences that delight users.",
        icon: "Paintbrush", // Lucide icon name
    },
    {
        name: "API Integration",
        description: "Seamlessly integrating third-party APIs and building custom API solutions.",
        icon: "Cloud", // Lucide icon name
    },
    {
        name: "Performance Optimization",
        description: "Optimizing web applications for speed, responsiveness, and SEO.",
        icon: "Rocket", // Lucide icon name
    },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "E-commerce Platform",
        description: "A full-stack e-commerce application built with React, Node.js, Express, and MongoDB. Features include product listings, shopping cart, user authentication, and order management.",
        image: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=E-commerce",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: "2",
        title: "Task Management App",
        description: "A collaborative task management application allowing users to create, assign, and track tasks. Implemented with React, TypeScript, GraphQL, and PostgreSQL.",
        image: "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Task+App",
        tags: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Apollo Client"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: "3",
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and experience. Designed with modern UI/UX principles and animated with Framer Motion.",
        image: "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Portfolio",
        tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive Design"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: "4",
        title: "Blog Platform",
        description: "A content management system and blog platform with admin panel, rich text editor, and commenting system. Built using Next.js, Strapi CMS, and PostgreSQL.",
        image: "https://via.placeholder.com/600x400/FF33DA/FFFFFF?text=Blog",
        tags: ["Next.js", "Strapi CMS", "PostgreSQL", "SSR"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: "5",
        title: "Recipe Sharing App",
        description: "An application for users to share and discover recipes. Features include search, categories, user profiles, and ratings. Developed with React Native (concept), Firebase, and Cloud Functions.",
        image: "https://via.placeholder.com/600x400/33FFF2/FFFFFF?text=Recipe+App",
        tags: ["React Native", "Firebase", "Cloud Functions", "Mobile App"],
        liveLink: "#",
        githubLink: "#",
    },
];
