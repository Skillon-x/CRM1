import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const data = [
  { name: "Prod A", value: 30, color: "#8B5CF6" },
  { name: "Prod B", value: 25, color: "#EC4899" },
  { name: "Prod C", value: 20, color: "#F59E0B" },
  { name: "Prod D", value: 15, color: "#10B981" },
  { name: "Prod E", value: 10, color: "#3B82F6" },
];

export default function RevenuePieChart() {
  return (
    <Card className="bg-gradient-to-br from-[#081028] to-[#1C2B4A] p-6 rounded-3xl shadow-xl w-1/2 text-white border-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-200">Revenue By Product</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-[#162A4D] text-white hover:bg-[#233A5F] flex items-center border-gray-500">
              <Calendar className="w-5 h-5 mr-2" /> This month
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#233A5F] text-white border-gray-500">
            <DropdownMenuItem>Last month</DropdownMenuItem>
            <DropdownMenuItem>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full h-80 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={6}
              dataKey="value"
              label={({ name }) => name}
              labelStyle={{ fontSize: "14px", fontWeight: "bold", fill: "#fff" }}
            >
              {data.map((entry, index) => (
                <motion.g
                  key={`cell-${index}`}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Cell fill={entry.color} stroke="#ffffff" strokeWidth={3} />
                </motion.g>
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#233A5F", borderRadius: "8px", color: "#ffffff" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
