import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic Validation
        if (!formData.username || !formData.email || !formData.password) {
            return setError('All fields are required.');
        }
        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match.");
        }
        if (formData.password.length < 6) {
            return setError("Password must be at least 6 characters.");
        }

        setLoading(true);

        const res = await register(formData.username, formData.email, formData.password);

        setLoading(false);

        if (res.success) {
            navigate('/login');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="flex justify-center items-start pt-12 animate-fade-in">
            <div className="card w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1>Create Account</h1>
                    <p>Join our premium store today.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-error text-sm p-3 rounded-md mb-6 border border-red-100 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="johndoe"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-link">
                        Log in here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
