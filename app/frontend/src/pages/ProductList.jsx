import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch products');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>;
    if (error) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: '#ef4444' }}>{error}</div>;

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Digital Products</h2>
                <span style={{ color: '#64748b' }}>{products.length} items</span>
            </div>

            <div className="grid animate-fade-in">
                {products.map(product => (
                    <div key={product.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '200px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {product.image_url ? (
                                <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <span style={{ fontSize: '3rem' }}>📦</span>
                            )}
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem', height: '40px', overflow: 'hidden' }}>
                                {product.description.length > 60 ? product.description.substring(0, 60) + '...' : product.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a' }}>${product.price}</span>
                                <Link to={`/products/${product.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
