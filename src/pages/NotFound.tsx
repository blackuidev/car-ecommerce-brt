import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HomeIcon } from "lucide-react";
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Card className="max-w-md w-full p-8 shadow-lg text-center">
        <CardContent className="space-y-6">
          <h1 className="text-6xl font-extrabold text-primarylw">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-foreground/70">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => navigate("/")}
            className="w-full"
          >
            <HomeIcon className="mr-2 h-4 w-4"/> Go Back Home
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NotFound;
