import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Play, Star, MapPin, Calendar } from "lucide-react";
import Home2 from "../components/Home2";

const Home = () => {
    return (
        <>
            <div className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/tour_hero_bg.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a1e] via-[#0f0a1e]/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-transparent"></div>
                </div>

                {/* Animated Background blobs for extra visual flair */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass w-fit mb-6 border border-white/10">
                                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                                <span className="text-xs font-bold tracking-wider text-white/90 uppercase">Trusted by 50,000+ Travelers</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                                Explore The <br />
                                <span className="gradient-text">World With Us</span>
                            </h1>

                            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light max-w-2xl">
                                Easily calculate and customize your tour packages with our professional management tool.
                                Experience seamless expense tracking and luxury travel planning.
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <Link
                                    to="/pakage"
                                    className="btn-premium flex items-center gap-3 text-white text-lg group"
                                >
                                    Start Calculating
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <button className="flex items-center gap-3 group text-white/90 hover:text-white transition-colors">
                                    <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                        <Play className="fill-white" size={18} />
                                    </div>
                                    <span className="font-semibold">Watch Tour</span>
                                </button>
                            </div>

                            {/* Quick Stats / Info Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">500+</h4>
                                        <p className="text-white/50 text-xs">Destinations</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-purple-400">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Infinite</h4>
                                        <p className="text-white/50 text-xs">Customization</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating card decoration for premium feel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: -5 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="hidden lg:block absolute right-[10%] top-1/4 w-80 p-6 glass rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
                >
                    <div className="w-full h-48 rounded-2xl bg-cover bg-center mb-4 overflow-hidden shadow-lg border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1506929113675-b62f3ef7e891?auto=format&fit=crop&q=80&w=400"
                            alt="Maldives"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Luxury Maldives Getaway</h3>
                    <div className="flex justify-between items-center text-white/60 text-sm">
                        <span>7 Days / 6 Nights</span>
                        <span className="text-indigo-400 font-bold">$1,299.00</span>
                    </div>
                </motion.div>
            </div>

            <Home2 />
        </>
    );
};

export default Home;
