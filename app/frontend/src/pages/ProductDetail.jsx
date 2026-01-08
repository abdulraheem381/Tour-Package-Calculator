import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Product not found');
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        alert('Added to cart!');
        navigate('/products');
    };

    if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>;
    if (error) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: '#ef4444' }}>{error}</div>;
    if (!product) return null;

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '1.5rem', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                &larr; Back to Products
            </button>
            <div className="card animate-fade-in" style={{ flexDirection: 'row', gap: '2rem', alignItems: 'flex-start', padding: '3rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px', height: '400px', background: '#f8fafc', borderRadius: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {product.image_url ? (
                        <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <span style={{ fontSize: '8rem' }}>📦</span>
                    )}
                </div>
                <div style={{ flex: '1 1 400px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Digital Download</span>
                    <h1 style={{ margin: '0.5rem 0', fontSize: '2.5rem' }}>{product.name}</h1>
                    <p style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 1.5rem' }}>${product.price}</p>
                    <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Description</h3>
                        <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>{product.description}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={handleAddToCart} className="btn btn-primary" style={{ padding: '1rem 2rem', width: '100%' }}>
                            Add to Cart
                        </button>
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#94a3b8', textAlign: 'center' }}>
                        Instant email delivery after purchase.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
