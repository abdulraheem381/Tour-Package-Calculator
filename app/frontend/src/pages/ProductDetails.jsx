import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error('Failed to fetch product', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        // Implement Cart Logic Later
        alert(`Added ${quantity} of ${product.name} to cart`);
    };

    if (loading) return <div className="text-center py-12">Loading...</div>;
    if (!product) return <div className="text-center py-12">Product not found</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
            </button>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Image Section */}
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <img
                        src={product.image_url || 'https://placehold.co/600'}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex items-center text-yellow-500 mb-6 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="text-gray-400 text-sm ml-2">(No reviews yet)</span>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {product.description || 'No description available for this product.'}
                    </p>

                    <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                        <span className="text-gray-400 mb-2">USD</span>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                className="px-3 py-2 hover:bg-gray-100 disabled:opacity-50"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 font-medium">{quantity}</span>
                            <button
                                className="px-3 py-2 hover:bg-gray-100"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <span className="text-sm text-gray-500">
                            {product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={addToCart}
                            className="flex-1 btn btn-primary text-base py-3 shadow-lg shadow-indigo-200"
                            disabled={product.quantity <= 0}
                        >
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductDetails;
