import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AnimatedPage from "./components/AnimatedPage";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// =======================================================
// ✅ Main Layout Wrapper with Conditional Header and Footer
// =======================================================
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const shouldHideHeader = location.pathname === '/404';

    return (
        <div className="flex flex-col min-h-screen">
            {!shouldHideHeader && <Header />}
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    {/* Use location.pathname as key for page transitions */}
                    {React.cloneElement(children as React.ReactElement, { key: location.pathname })}
                </AnimatePresence>
            </main>
            {!shouldHideHeader && <Footer />}
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};
// =======================================================

const App = () => (
    <div className="font-inter antialiased text-foreground bg-background">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
                        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
                        <Route path="/portfolio" element={<AnimatedPage><PortfolioPage /></AnimatedPage>} />
                        <Route path="/services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
                        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
                        <Route path="/404" element={<AnimatedPage><NotFound /></AnimatedPage>} />
                        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;