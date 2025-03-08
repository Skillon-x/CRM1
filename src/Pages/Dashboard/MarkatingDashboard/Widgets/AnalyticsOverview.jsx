"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

const widgets = [
  {
    title: "Total Revenue",
    value: "50.8K",
    change: "28.4%",
    positive: true,
  },
  {
    title: "Sales Target",
    value: "92%",
    change: "3.1%",
    positive: true,
    negativeChange: "12.6%",
  },
  {
    title: "Total Orders",
    value: "756",
    change: "3.1%",
    positive: true,
  },
  {
    title: "Active Deals",
    value: "2.3K",
    change: "11.3%",
    positive: true,
  },
];

const Widgets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
      {widgets.map((widget, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="bg-[#0B1739] text-white shadow-md border-none">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-sm text-gray-400">
                {widget.title}
              </CardTitle>
              <MoreHorizontal className="text-gray-500" size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{widget.value}</div>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-md ${
                    widget.positive
                      ? "bg-green-900 text-green-400"
                      : "bg-red-900 text-red-400"
                  }`}
                >
                  {widget.change} {widget.positive ? "↑" : "↓"}
                </span>
                {widget.negativeChange && (
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-red-900 text-red-400">
                    {widget.negativeChange} ↓
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Widgets;
