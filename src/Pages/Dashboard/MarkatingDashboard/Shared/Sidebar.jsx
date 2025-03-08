import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Star,
  Users,
  Package,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/Marketing" },
  { name: "Campaigns", icon: Star, path: "/campaigns" },
  { name: "Social media", icon: Users, path: "/social-media" },
  { name: "Product List", icon: Package, path: "/products" },
  { name: "Calendar", icon: CalendarDays, path: "/calendar1" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-50 md:hidden p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
      </Button>

      {/* Sidebar Container */}
      <motion.div
        animate={{ width: isOpen ? "16rem" : "0rem" }}
        transition={{ duration: 0.3 }}
        className={`h-screen bg-[#081028] text-white p-5 flex flex-col shadow-xl fixed inset-y-0 left-0 z-40 ${
          isOpen ? "w-64" : "w-0"
        } md:w-64 md:block`}
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <Avatar className="w-10 h-10">
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
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.button
                key={item.name}
                onClick={() => navigate(item.path)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center w-full gap-3 p-3 rounded-lg transition-all duration-300 text-left
                  ${
                    isActive
                      ? "text-pink-500 bg-[#121241] font-semibold shadow-lg"
                      : "text-gray-400 hover:bg-gray-800"
                  }
                `}
              >
                <item.icon
                  size={20}
                  className={isActive ? "text-pink-500" : "text-gray-400"}
                />
                <span className={`font-semibold ${isActive ? "text-pink-500" : "text-gray-400"}`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-full bg-pink-500 rounded-lg"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
