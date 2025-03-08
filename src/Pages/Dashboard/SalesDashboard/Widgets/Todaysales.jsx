"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const salesData = [
  {
    id: 1,
    value: "$5k",
    label: "Total Sales",
    change: "+10% from yesterday",
    color: "text-orange-400",
  },
  {
    id: 2,
    value: "500",
    label: "Total Orders",
    change: "+8% from yesterday",
    color: "text-green-400",
  },
  {
    id: 3,
    value: "9",
    label: "Products Sold",
    change: "+2% from yesterday",
    color: "text-blue-400",
  },
  {
    id: 4,
    value: "12",
    label: "New Customers",
    change: "+3% from yesterday",
    color: "text-teal-400",
  },
];

const SalesSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121241] text-white p-6 rounded-2xl shadow-lg w-210"
    >
      {/* Title Section */}
      <h2 className="text-lg font-semibold text-center">Today's Sales</h2>
      <p className="text-sm text-gray-400 text-center mb-6">Sales Summary</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {salesData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="bg-[#0A0F1F] rounded-xl p-4 shadow-md text-center">
              <CardContent>
                <h3 className="text-xl font-bold">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.label}</p>
                <span className={`text-xs ${item.color}`}>{item.change}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SalesSummary;
