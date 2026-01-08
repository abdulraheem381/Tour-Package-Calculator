import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-serif font-bold mb-4">Your Bag is Empty</h2>
                    <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
                    <Link to="/" className="btn btn-primary px-8 py-3">
                        Start Shopping
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container">
                <h1 className="text-4xl font-serif font-bold mb-10">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="bg-white p-6 rounded-lg border border-gray-100 flex gap-6 items-center shadow-sm"
                            >
                                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image || item.image_url}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Quantity: {item.quantity}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 border border-gray-200 rounded-full px-3 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-primary disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-primary"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <Link to="/" className="inline-flex items-center text-primary font-medium hover:underline mt-4">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm sticky top-32">
                            <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="btn btn-primary w-full py-4 text-lg">
                                Proceed to Checkout
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-4">
                                Secure Checkout - SSL Encrypted
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
