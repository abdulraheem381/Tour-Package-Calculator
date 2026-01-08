import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Twitter, Facebook, ArrowUp, Briefcase } from 'lucide-react';
import Navbar from './Navbar';

const Layout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#0f0a1e] font-['Outfit'] selection:bg-indigo-500/30">
            <Navbar />

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={window.location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-[#0a0614] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
                {/* Decoration Orbs */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <Link to="/" className="flex items-center gap-2 mb-6 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                    <Briefcase size={24} />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-white uppercase">
                                    TOUR<span className="text-indigo-400">PAK.</span>
                                </span>
                            </Link>
                            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                                Redefining tour package management with professional tools and premium experiences. Plan your next adventure with confidence.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                            <ul className="space-y-3 text-white/40 text-sm">
                                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                                <li><Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link></li>
                                <li><Link to="/agent" className="hover:text-indigo-400 transition-colors">Agents List</Link></li>
                                <li><Link to="/hotel" className="hover:text-indigo-400 transition-colors">Hotels Directory</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
                            <ul className="space-y-3 text-white/40 text-sm">
                                <li><Link to="#" className="hover:text-indigo-400 transition-colors">Documentation</Link></li>
                                <li><Link to="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                                <li><Link to="#" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
                            <p className="text-white/40 text-sm mb-6">Stay updated with the latest destinations.</p>
                            <div className="flex bg-white/5 rounded-2xl p-1 border border-white/10 focus-within:border-indigo-500/50 transition-all">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none text-sm placeholder:text-white/20"
                                />
                                <button className="bg-indigo-500 text-white rounded-xl px-4 py-2 text-xs font-bold uppercase hover:bg-indigo-400 transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-white/20 tracking-widest font-medium uppercase">
                            &copy; 2026 Tour Package Calculator • Built for DevOps Excellence
                        </p>
                        <div className="flex gap-6 text-white/40">
                            <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-indigo-400 transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-indigo-500 text-white rounded-2xl shadow-2xl z-50 hover:bg-indigo-400 transition-colors border border-white/10"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
