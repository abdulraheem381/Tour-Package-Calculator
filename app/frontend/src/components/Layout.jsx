import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Search, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="layout">
            <header className={`navbar ${scrolled ? 'shadow-sm' : 'bg-transparent border-transparent'}`}
                style={{
                    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
                }}
            >
                <div className="container navbar-content">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-serif font-bold tracking-tighter z-50 mix-blend-difference"
                        style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                        LUXE<span className="text-primary">.</span>STORE
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex nav-links">
                        <Link to="/" className="nav-link" style={{ color: scrolled ? 'var(--color-text-secondary)' : 'white' }}>Collections</Link>
                        <Link to="/" className="nav-link" style={{ color: scrolled ? 'var(--color-text-secondary)' : 'white' }}>New Arrivals</Link>
                        <Link to="/" className="nav-link" style={{ color: scrolled ? 'var(--color-text-secondary)' : 'white' }}>Accessories</Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button className="p-2 hover:bg-black/5 rounded-full transition-colors" style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                            <Search className="w-5 h-5" />
                        </button>

                        <Link to="/cart" className="relative p-2 hover:bg-black/5 rounded-full" style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                            <ShoppingCart className="w-5 h-5" />
                            {/* Optional: Add badge here if cartItems.length > 0 */}
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-3">
                                <Link to="/dashboard" className="hidden md:flex items-center gap-2 text-sm font-semibold" style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md border-2 border-white">
                                        {user.username.charAt(0).toUpperCase()}
                                    </div>
                                </Link>
                                <button onClick={handleLogout} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors" style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link to="/login" className="font-semibold hover:opacity-80 transition-opacity" style={{ color: scrolled ? 'var(--color-text-primary)' : 'white' }}>
                                    Login
                                </Link>
                                <Link to="/register" className={`btn ${scrolled ? 'btn-primary' : 'bg-white text-black hover:bg-gray-100'} px-5 py-2`}>
                                    Join
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </main>

            <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-2xl font-serif font-bold mb-6">LUXE.STORE</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Redefining the modern shopping experience with curated collections and unparalleled quality.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Shop</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link to="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Accessories</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Sale</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Support</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Size Guide</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive drops.</p>
                            <div className="flex bg-gray-800 rounded-full p-1 border border-gray-700 focus-within:border-gray-500 transition-colors">
                                <input type="email" placeholder="email@example.com" className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none text-sm" />
                                <button className="bg-white text-black rounded-full px-4 py-2 text-xs font-bold uppercase hover:bg-gray-200 transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
                        <p>&copy; 2026 Commit2Prod Storefront. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
