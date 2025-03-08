"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";

const Header = ({ username }) => {
  const [notifications, setNotifications] = useState([
    "New transaction received",
    "Your staking reward is ready",
    "Security alert: New login detected",
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNotificationClick = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl flex justify-between items-center p-4 bg-[#081028] text-white shadow-md relative"
    >
      {/* Welcome Text */}
      <h2 className="text-lg font-semibold ml-4">Welcome back, {username}</h2>

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
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            className="p-2 rounded-full hover:bg-gray-800 transition relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Bell className="text-gray-400" size={20} />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-[#131520] border border-gray-700 shadow-lg rounded-lg overflow-hidden z-50"
            >
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer transition"
                    onClick={() => handleNotificationClick(index)}
                  >
                    {notification}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-400">No new notifications</div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
