"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";

const Header = ({ username }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-between items-center p-4 bg-[#081028] text-white shadow-md"
    >
      {/* Welcome Text */}
      <h2 className="text-lg font-semibold">Welcome back, {username}</h2>

      {/* Search & Notification */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <Input
            type="text"
            placeholder="Type here..."
            className="bg-[#131520] text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-gray-500 focus:ring-0"
          />
        </motion.div>

        {/* Notification Icon */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-gray-800 transition"
        >
          <Bell className="text-gray-400" size={20} />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
