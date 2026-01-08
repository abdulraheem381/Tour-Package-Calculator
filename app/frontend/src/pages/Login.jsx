<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { start, success, failure } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(start());
      const res = await axiosInstance.post("/auth/login", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast("Signed in successfully!");
      dispatch(success(res.data));
      setForm({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error signing in. Please try again.";
      toast(errorMessage);
      dispatch(failure(errorMessage));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="min-h-[400px] flex flex-col min-w-[400px] bg-purple-950 rounded-md border-[2px] border-white">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-white font-bold text-4xl mt-14">
              Signin
            </h1>
            <div className="flex flex-col gap-3 justify-center items-center mt-6">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email:"
                className="h-10 w-80 px-4 text-white  focus:border-[3px] placeholder:text-white rounded-md border-[2px] border-white outline-none bg-transparent"
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password:"
                className="h-10 w-80 px-4 text-white  focus:border-[3px] placeholder:text-white rounded-md border-[2px] border-white outline-none bg-transparent"
              />
              <button
                disabled={loading}
                type="submit"
                className="text-white border-white border-[2px] h-10 w-80 rounded-md text-lg font-semibold hover:scale-95 hover:shadow-inner hover:bg-purple-200 hover:text-black transition-transform duration-200"
              >
                {loading ? "Submitting.." : "Submit"}
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center gap-1 mt-2">
            <p className="text-white">
              Don't have account?{" "}
              <Link
                to="/signin"
                className="hover:underline font-bold text-white "
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
=======
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            return setError('Please enter both email and password.');
        }

        setLoading(true);
        const res = await login(email, password);
        setLoading(false);

        if (res.success) {
            navigate('/dashboard');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="flex justify-center items-start pt-12 animate-fade-in">
            <div className="card w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1>Welcome Back</h1>
                    <p>Please enter your details to sign in.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-error text-sm p-3 rounded-md mb-6 border border-red-100 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-link">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea
};

export default Login;
