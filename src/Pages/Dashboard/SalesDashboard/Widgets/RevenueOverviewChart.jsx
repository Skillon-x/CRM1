import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "SEP", value1: 30, value2: 50 },
  { name: "OCT", value1: 40, value2: 45 },
  { name: "NOV", value1: 50, value2: 60 },
  { name: "DEC", value1: 45, value2: 55 },
  { name: "JAN", value1: 55, value2: 65 },
  { name: "FEB", value1: 60, value2: 70 },
];

export default function RevenueOverviewChart() {
  return (
    <Card className="p-6 rounded-3xl shadow-xl bg-[#0B1739] text-white w-full max-w-7xl mx-auto border-none">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Revenue Overview</h2>
          <p className="text-gray-400">$37.5K <span className="text-green-400">▲ +2.45%</span></p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white text-black hover:bg-gray-200 flex items-center">
              <Calendar className="w-5 h-5 mr-2" /> This month
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black w-40">
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Last month</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Last 3 months</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Last 6 months</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">Last year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis hide />
            <Tooltip contentStyle={{ backgroundColor: "#233A5F", borderRadius: "8px", color: "#ffffff" }} />
            <Line type="monotone" dataKey="value1" stroke="#3B82F6" strokeWidth={3} dot={{ fill: "#3B82F6" }} />
            <Line type="monotone" dataKey="value2" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: "#8B5CF6" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
