import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  File,
  Settings,
  ChevronRight,
  Users,
  Star,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/tech" },
  { name: "Projects", icon: Star, path: "/projects" },
  { name: "Team", icon: Users, path: "/team" },
  { name: "Report", icon: File, path: "/report" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#081028] text-white p-5 flex flex-col shadow-xl fixed inset-y-0 left-0">
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
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.button
              key={item.name}
              onClick={() => navigate(item.path)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center w-full gap-3 p-3 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "text-pink-500 border-l-4 border-pink-500 bg-[#121241]"
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
            </motion.button>
          );
        })}
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

export default Sidebar;
