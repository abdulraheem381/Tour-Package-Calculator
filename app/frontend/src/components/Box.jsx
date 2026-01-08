import React from 'react';
import { motion } from 'framer-motion';

const Box = ({ title, number, icon, color = "indigo" }) => {
  const colorMap = {
    indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 text-indigo-400",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
    rose: "from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-400",
  };

  const selectedColor = colorMap[color] || colorMap.indigo;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`card-booking w-full md:w-72 bg-gradient-to-br ${selectedColor} border flex flex-col items-start gap-4`}
    >
      <div className={`p-3 rounded-2xl bg-white/5 backdrop-blur-md`}>
        {icon}
      </div>
      <div>
        <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">{title}</p>
        <h2 className="text-4xl font-black text-white tracking-tighter">
          {number}
        </h2>
      </div>
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          className={`h-full bg-gradient-to-r ${selectedColor.split(' ')[1]} to-white/20`}
        />
      </div>
    </motion.div>
  );
};

export default Box;
