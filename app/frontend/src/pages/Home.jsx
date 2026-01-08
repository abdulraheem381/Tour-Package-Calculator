<<<<<<< HEAD
import React, { useEffect } from "react";
import bg from "/bg.jpg";
import Home2 from "../components/Home2";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const element = document.querySelector(".typed");
    if (!element) return; 

    const typed = new Typed(element, {
      strings: ["Calculate Your Tour Package Now"],
      typeSpeed: 150,
      backSpeed: 25,
      loop: true,
    
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center pt-20 h-full text-center text-white">
          <span className="text-5xl font-extrabold uppercase typed"></span>
          <p className="text-1xl italic font-semibold">
            Easily calculate and customize your tour packages with our simple tool. Get started now!
          </p>

          <Link to='/pakage' className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-600 rounded-full shadow-lg hover:opacity-90 transition">
            Start Calculating →
          </Link>
        </div>
      </div>
      <Home2 />
    </>
  );
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const Home = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    // High quality Unsplash images for specific fallbacks
    const imageMap = {
        'default': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        'Accessories': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
        'Apparel': 'https://images.unsplash.com/photo-1551028919-ac6635f0ad16?q=80&w=1000&auto=format&fit=crop',
        'Basics': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
        'Gear': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    };

    const getValidImage = (product) => {
        if (product.image && product.image.includes('http')) return product.image;
        if (product.image_url && product.image_url.includes('http')) return product.image_url;
        return imageMap[product.category] || imageMap['default'];
    };

    // Fallback Mock Data in case DB is empty or fails
    const mockProducts = [
        { id: 101, name: 'Minimalist Leather Watch', price: 149.00, category: 'Accessories', image: imageMap['Accessories'] },
        { id: 102, name: 'Premium Denim Jacket', price: 89.50, category: 'Apparel', image: imageMap['Apparel'] },
        { id: 103, name: 'Essential Cotton Tee', price: 35.00, category: 'Basics', image: imageMap['Basics'] },
        { id: 104, name: 'Urban Travel Backpack', price: 110.00, category: 'Gear', image: imageMap['Gear'] }
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/products');
                // Use DB products if available, else mock
                setProducts(res.data.length > 0 ? res.data : mockProducts);
            } catch (err) {
                console.log('Using mock data due to API error');
                setProducts(mockProducts);
            }
        };
        fetchProducts();
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const scrollToProducts = () => {
        const element = document.getElementById('featured');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="overflow-hidden">
            {/* --- HERO SECTION --- */}
            <section className="hero">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion Editorial"
                    className="hero-bg"
                />
                <div className="container hero-content">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-2xl"
                    >
                        <span className="badge badge-new mb-6 inline-block tracking-widest">Spring Collection 2026</span>
                        <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
                            Redefine Your <br /> <span className="text-primary italic">Aesthetic</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-lg">
                            Curated essentials for the modern minimalist.
                            Uncompromising quality, sustainable design.
                        </p>
                        <div className="flex gap-4">
                            <button onClick={scrollToProducts} className="btn btn-primary px-8 py-4 text-lg">
                                Shop New Arrivals
                            </button>
                            <button onClick={scrollToProducts} className="btn btn-outline border-white text-white hover:border-transparent hover:text-gray-900 px-8 py-4 text-lg">
                                Explore
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CATEGORIES --- */}
            <section className="py-section bg-white">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {['Men', 'Women', 'Accessories'].map((cat, idx) => {
                            const catImages = {
                                'Men': 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2148&auto=format&fit=crop',
                                'Women': 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=2148&auto=format&fit=crop',
                                'Accessories': 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop'
                            };
                            return (
                                <motion.div
                                    key={cat}
                                    variants={fadeInUp}
                                    className="group relative h-96 rounded-lg overflow-hidden cursor-pointer"
                                    onClick={scrollToProducts}
                                >
                                    <img
                                        src={catImages[cat]}
                                        alt={cat}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => e.target.src = 'https://placehold.co/800x600'}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-serif">{cat}</h3>
                                        <div className="h-1 w-0 bg-white mt-2 transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* --- FEATURED PRODUCTS --- */}
            <section id="featured" className="py-section">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="section-title text-left mb-2">Curated Picks</h2>
                            <p className="text-gray-500">Hand selected items for this season</p>
                        </div>
                        <Link to="/" className="text-primary font-medium flex items-center hover:translate-x-1 transition-transform">
                            View All <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid-products"
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={fadeInUp}
                                className="card group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <span className="absolute top-3 left-3 z-10 badge badge-new">New</span>
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            src={getValidImage(product)}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </Link>
                                    {/* Quick Actions Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center pb-6 bg-gradient-to-t from-black/50 to-transparent">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart(product);
                                                // Optional: Add toast notification here
                                            }}
                                            className="btn btn-primary w-full shadow-xl"
                                        >
                                            Quick Add - ${product.price}
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <Link to={`/products/${product.id}`} className="block">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Premium</p>
                                                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                            </div>
                                            <div className="flex text-yellow-500">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-xs text-gray-400 ml-1">4.9</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- FEATURES / TRUST --- */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Global Shipping</h3>
                            <p className="text-gray-500 max-w-xs">Free shipping on all orders over $150. Tracked and insured delivery.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Secure Payments</h3>
                            <p className="text-gray-500 max-w-xs">All transactions are encrypted and secured with top-tier industry standards.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-primary">
                                <RefreshCw className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3">30-Day Returns</h3>
                            <p className="text-gray-500 max-w-xs">Not perfectly satisfied? Return it within 30 days for a full refund.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea
};

export default Home;
