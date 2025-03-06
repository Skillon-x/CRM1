"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  BarChart,
  ShoppingCart,
  Calendar,
  Settings,
  ChevronRight,
  Bell,
  ShoppingBag,
} from "lucide-react";

// Sidebar menu items
const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Revenue", icon: BarChart },
  { name: "Orders", icon: ShoppingCart },
  { name: "Calendar", icon: Calendar },
];

const SidebarContent = ({ active, setActive }) => {
  return (
    <div className="w-64 h-screen bg-[#081028] text-white p-5 flex flex-col shadow-xl">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-6"
      >
        <Avatar>
          <AvatarImage src="https://via.placeholder.com/40" />
          <AvatarFallback>JC</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold">John Carter</h4>
          <p className="text-xs text-gray-400">Account settings</p>
        </div>
      </motion.div>

      {/* Separator */}
      <Separator className="mb-4 bg-gray-700" />

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => setActive(item.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex items-center w-full gap-3 p-3 rounded-lg transition-all duration-300
              ${
                active === item.name
                  ? "text-pink-500 border-l-4 border-pink-500 bg-[#121241]"
                  : "text-gray-400 hover:bg-gray-800"
              }
            `}
          >
            <item.icon
              size={20}
              className={active === item.name ? "text-pink-500" : "text-gray-400"}
            />
            <span className={`font-semibold ${active === item.name ? "text-pink-500" : "text-gray-400"}`}>
              {item.name}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* Separator */}
      <Separator className="my-4 bg-gray-700" />

      {/* Settings */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto flex items-center justify-between w-full p-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <ChevronRight size={16} />
      </motion.button>
    </div>
  );
};

SidebarContent.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

// Recent Activity Widget
const recentActivities = [
  {
    id: 1,
    icon: <Bell className="text-blue-400" size={18} />,
    text: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
  },
  {
    id: 2,
    icon: <ShoppingBag className="text-red-500" size={18} />,
    text: "New order #4219423",
    date: "21 DEC 11:21 PM",
  },
  {
    id: 3,
    icon: <ShoppingCart className="text-blue-400" size={18} />,
    text: "Server Payments for April",
    date: "21 DEC 9:28 PM",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-[#121241] text-white p-5 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg">
              {activity.icon}
            </div>
            <div>
              <p className="text-sm">{activity.text}</p>
              <span className="text-xs text-gray-400">{activity.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Sales Dashboard Page
const SalesDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarContent active={activePage} setActive={setActivePage} />

      </div>

  );
};

export default SalesDashboard;
