import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut, ChevronRight, Home as HomeIcon, LayoutDashboard, Hotel, ShieldCheck, Briefcase } from "lucide-react";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <HomeIcon size={18} /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Agents", path: "/agent", icon: <ShieldCheck size={18} /> },
    { name: "Hotels", path: "/hotel", icon: <Hotel size={18} /> },
    { name: "Services", path: "/service", icon: <Briefcase size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-3 glass shadow-2xl" : "py-5 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <Briefcase size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            TOUR<span className="text-indigo-400">PAK.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-all duration-300 hover:text-indigo-400 flex items-center gap-2 ${location.pathname === link.path ? "text-indigo-400" : "text-white/80"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {userData ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-inner"
              >
                <span className="font-bold">
                  {userData.userData.username.charAt(0).toUpperCase()}
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white p-2"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-white/80 hover:text-white font-semibold transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signin"
                className="btn-premium flex items-center gap-2 text-white"
              >
                Get Started <ChevronRight size={18} />
              </Link>
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white p-2"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 glass z-[110] p-8 shadow-2xl lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold gradient-text">Menu</span>
              <button onClick={toggleMenu} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className="flex items-center gap-4 text-lg font-medium text-white/90 hover:text-indigo-400 transition-colors"
                  >
                    <span className="p-2 rounded-lg bg-white/5">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <hr className="border-white/10 my-4" />

              {userData ? (
                <Link
                  to="/profile"
                  onClick={toggleMenu}
                  className="flex items-center gap-4 text-lg font-medium text-white/90 hover:text-indigo-400 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-white/5"><User size={18} /></span>
                  Profile
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="flex items-center gap-4 text-lg font-medium text-white/90 hover:text-indigo-400 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-white/5"><LogOut size={18} /></span>
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
