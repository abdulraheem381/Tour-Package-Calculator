<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../utils/axios";
const Dashboard = () => {
  const [agents, setAgents] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [services, setServices] = useState([]);
  const getAgents = async () => {
    try {
      const response = await axiosInstance.get("/company/fetch-agents");
      setAgents(response.data.agents);
    } catch (error) {
      toast("Could not fetch agents");
    }
  };
  const getHotels = async () => {
    try {
      const response = await axiosInstance.get("/hotel/");
      setHotels(response.data.hotels);
    } catch (error) {
      toast("Could not fetch hotels");
    }
  };
  const getServices = async () => {
    try {
      const response = await axiosInstance.get("/service");
      setServices(response.data);
      console.log(response.data);
    } catch (error) {
      toast("Could not fetch hotels");
    }
  };

  useEffect(() => {
    getAgents();
    getHotels();
    getServices();
  }, []);
  return (
    <>
      <h1 className="text-4xl text-purple-950 text-center mt-4 font-extrabold uppercase">
        Dashboard
      </h1>
      <div className="min-h-[300px] max-w-[90vw] gap-6 mb-10 mx-auto flex flex-col mt-20 md:mt-0 ">
        <h1 className="text-2xl text-purple-950   font-extrabold uppercase">
          Agents Summary
        </h1>

        <div className="flex gap-4 flex-wrap mt-3">
          <Box title="Total Agents" number={agents.length} />
          <Box
            title="Available Agents"
            number={agents.filter((agent) => agent.isActive === true).length}
          />
          <Box
            title="UnAvailable Agents"
            number={agents.filter((agent) => agent.isActive === false).length}
          />
        </div>

        <h1 className="text-2xl text-purple-950   font-extrabold uppercase">
          Hotels Summary
        </h1>
        <div className="flex gap-4 flex-wrap mt-3">
          <Box title="Total Hotels" number={hotels.length} />
          <Box
            title="Available Hotels"
            number={hotels.filter((hotel) => hotel.isActive === true).length}
          />
          <Box
            title="UnAvailable Hotels"
            number={hotels.filter((hotel) => hotel.isActive === false).length}
          />
        </div>

        <h1 className="text-2xl text-purple-950   font-extrabold uppercase">
          Services Summary
        </h1>
        <div className="flex gap-4 flex-wrap mt-3">
          <Box title="Total Services" number={services.length} />
          <Box
            title="Available Services"
            number={
              services.filter((service) => service.isEnabled === true).length
            }
          />
          <Box
            title="UnAvailable Services"
            number={
              services.filter((service) => service.isEnabled === false).length
            }
          />
        </div>
      </div>
    </>
  );
=======
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Package, User as UserIcon, Settings, LogOut, Code, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user, logout } = useAuth();

    // Placeholder orders
    const orders = [
        { id: 'ORD-1234', date: 'March 15, 2026', total: 120.00, status: 'Delivered', items: ['Minimalist Watch', 'Basic Tee'] },
        { id: 'ORD-5678', date: 'March 10, 2026', total: 45.50, status: 'Processing', items: ['Cotton Cap'] },
        { id: 'ORD-9012', date: 'Feb 28, 2026', total: 210.00, status: 'Delivered', items: ['Denim Jacket', 'Sunglasses'] }
    ];

    if (!user) return (
        <div className="min-h-screen pt-32 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                <p>Please log in to view your dashboard.</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-4 items-end mb-10 justify-between">
                    <div>
                        <h1 className="text-4xl font-serif font-bold mb-2">My Account</h1>
                        <p className="text-gray-500">Welcome back, <span className="font-semibold text-primary">{user.username}</span></p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-500 shadow-sm">
                        Member since 2026
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="card p-4 space-y-2">
                            <button className="w-full flex items-center gap-3 p-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium transition-colors">
                                <Package className="w-5 h-5" />
                                Orders
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <UserIcon className="w-5 h-5" />
                                Profile
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <Heart className="w-5 h-5" />
                                Wishlist
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <Settings className="w-5 h-5" />
                                Settings
                            </button>
                        </div>

                        <div className="card p-6 bg-gray-900 text-white border-none">
                            <h3 className="font-bold mb-2">Need Help?</h3>
                            <p className="text-sm text-gray-400 mb-4">Our support team is available 24/7 to assist with your orders.</p>
                            <button className="text-sm underline hover:text-gray-200">Contact Support</button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card p-6 border-l-4 border-indigo-500">
                                <p className="text-gray-500 text-sm mb-1">Total Spent</p>
                                <p className="text-2xl font-bold">$375.50</p>
                            </div>
                            <div className="card p-6 border-l-4 border-purple-500">
                                <p className="text-gray-500 text-sm mb-1">Active Orders</p>
                                <p className="text-2xl font-bold">1</p>
                            </div>
                            <div className="card p-6 border-l-4 border-pink-500">
                                <p className="text-gray-500 text-sm mb-1">Reward Points</p>
                                <p className="text-2xl font-bold">1,250</p>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="card overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h2 className="text-xl font-bold">Recent Orders</h2>
                                <button className="text-primary text-sm font-medium hover:underline">View All</button>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {orders.map((order, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={order.id}
                                        className="p-6 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex flex-wrap justify-between items-center gap-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="font-bold text-gray-900">{order.id}</span>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.status === 'Delivered'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-blue-100 text-blue-700'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500">{order.date}</p>
                                            </div>

                                            <div className="hidden md:block flex-1 px-8">
                                                <p className="text-sm text-gray-600 truncate max-w-xs">{order.items.join(', ')}</p>
                                            </div>

                                            <div className="text-right">
                                                <p className="font-bold">${order.total.toFixed(2)}</p>
                                                <button className="text-xs text-primary font-medium hover:underline">View Details</button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea
};

export default Dashboard;
