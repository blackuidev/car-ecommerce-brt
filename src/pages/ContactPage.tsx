import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend service
        console.log('Form submitted:', formData);
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <motion.div
            className="container mx-auto py-16 px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Contact Muhilan - Freelance Web Developer</title>
                <meta name="description" content="Get in touch with Muhilan for freelance web development inquiries, project discussions, or collaborations." />
            </Helmet>

            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Get in <span className="text-primarylw">Touch</span>
            </motion.h1>

            <motion.p
                className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                Have a project in mind, a question, or just want to say hello? Feel free to reach out using the form below or connect with me through my contact details.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Card className="h-full p-6">
                        <CardHeader>
                            <CardTitle className="text-3xl">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 text-lg text-muted-foreground">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-primarylw" />
                                <span>muhilan.dev@example.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-primarylw" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-primarylw" />
                                <span>Chennai, India</span>
                            </div>
                            <p className="mt-8 text-base">
                                I'm available for new projects and collaborations. Don't hesitate to send a message!
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <Card className="h-full p-6">
                        <CardHeader>
                            <CardTitle className="text-3xl">Send Me a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="h-12 text-base"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="h-12 text-base"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="h-12 text-base"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        className="text-base"
                                    />
                                </div>
                                <Button type="submit" className="w-full py-3 text-lg">
                                    <Send className="mr-2 h-5 w-5" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
