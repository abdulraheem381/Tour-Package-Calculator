import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { start, success, failure } from "../redux/userSlice";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

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

      toast.success("Signed in successfully!");
      dispatch(success(res.data));
      setForm({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error signing in. Please try again.";
      toast.error(errorMessage);
      dispatch(failure(errorMessage));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a1e] px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass rounded-3xl p-10 border border-white/10 shadow-2xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white tracking-tighter mb-2">Welcome Back</h2>
            <p className="text-white/50 text-sm">Sign in to manage your tour packages</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-indigo-400 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-indigo-400 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-all"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full btn-premium flex items-center justify-center gap-3 text-white font-bold text-lg transition-all"
            >
              {loading ? "Signing in..." : (
                <>
                  Continue <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signin"
                className="text-white hover:text-indigo-400 font-bold transition-colors underline decoration-indigo-500/50 underline-offset-4"
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
