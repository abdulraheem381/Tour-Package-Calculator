import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../utils/axios";
import { motion } from "framer-motion";
import { Users, Building2, ShoppingBag, ShieldCheck, ShieldX, CheckCircle, XCircle } from "lucide-react";

const Dashboard = () => {
  const [agents, setAgents] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [agentsRes, hotelsRes, servicesRes] = await Promise.all([
        axiosInstance.get("/company/fetch-agents"),
        axiosInstance.get("/hotel/"),
        axiosInstance.get("/service")
      ]);
      setAgents(agentsRes.data.agents || []);
      setHotels(hotelsRes.data.hotels || []);
      setServices(servicesRes.data || []);
    } catch (error) {
      toast.error("Could not fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#0f0a1e]">
      <div className="container mx-auto">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black text-white tracking-tighter"
          >
            DASHBOARD <br />
            <span className="gradient-text uppercase text-3xl">System Overview</span>
          </motion.h1>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Agents Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Agents Management</h2>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Box
                title="Total Agents"
                number={agents.length}
                icon={<Users className="text-indigo-400" />}
                color="indigo"
              />
              <Box
                title="Active"
                number={agents.filter((a) => a.isActive).length}
                icon={<ShieldCheck className="text-emerald-400" />}
                color="emerald"
              />
              <Box
                title="Inactive"
                number={agents.filter((a) => !a.isActive).length}
                icon={<ShieldX className="text-rose-400" />}
                color="rose"
              />
            </div>
          </section>

          {/* Hotels Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Hotels Network</h2>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Box
                title="Total Hotels"
                number={hotels.length}
                icon={<Building2 className="text-purple-400" />}
                color="purple"
              />
              <Box
                title="Available"
                number={hotels.filter((h) => h.isActive).length}
                icon={<CheckCircle className="text-emerald-400" />}
                color="emerald"
              />
              <Box
                title="Booked/Full"
                number={hotels.filter((h) => !h.isActive).length}
                icon={<XCircle className="text-rose-400" />}
                color="rose"
              />
            </div>
          </section>

          {/* Services Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-1 bg-cyan-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Services Directory</h2>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Box
                title="Total Services"
                number={services.length}
                icon={<ShoppingBag className="text-cyan-400" />}
                color="cyan"
              />
              <Box
                title="Active"
                number={services.filter((s) => s.isEnabled).length}
                icon={<CheckCircle className="text-emerald-400" />}
                color="emerald"
              />
              <Box
                title="Disabled"
                number={services.filter((s) => !s.isEnabled).length}
                icon={<XCircle className="text-rose-400" />}
                color="rose"
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
