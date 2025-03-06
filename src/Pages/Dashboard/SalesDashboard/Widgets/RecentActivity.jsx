"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bell, ShoppingCart, Package } from "lucide-react";

const activities = [
  {
    id: 1,
    icon: <Bell className="w-5 h-5 text-blue-400" />,
    text: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
  },
  {
    id: 2,
    icon: <Package className="w-5 h-5 text-red-400" />,
    text: "New order #4219423",
    date: "21 DEC 11:21 PM",
  },
  {
    id: 3,
    icon: <ShoppingCart className="w-5 h-5 text-blue-400" />,
    text: "Server Payments for April",
    date: "21 DEC 9:28 PM",
  },
];

const RecentActivity = () => {
  return (
    <Card className="bg-[#121241] text-white shadow-lg p-6 rounded-2xl w-full max-w-md">
      <CardHeader>
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </motion.div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              {activity.icon}
              <div>
                <p className="text-sm font-medium">{activity.text}</p>
                <p className="text-xs text-gray-400">{activity.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
