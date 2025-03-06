"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", expectedRevenue: 25000, actualRevenue: 24000 },
  { month: "Feb", expectedRevenue: 32000, actualRevenue: 30000 },
  { month: "Mar", expectedRevenue: 22000, actualRevenue: 20000 },
  { month: "Apr", expectedRevenue: 28000, actualRevenue: 27000 },
  { month: "May", expectedRevenue: 37000, actualRevenue: 35000 },
  { month: "Jun", expectedRevenue: 42000, actualRevenue: 40000 },
  { month: "Jul", expectedRevenue: 47000, actualRevenue: 45000 },
];

const RevenueAreaChart = () => {
  return (
    <Card className="bg-[#081028] text-white shadow-lg p-4">
      <CardHeader>
        <CardTitle>Expected Revenue vs. Actual Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip contentStyle={{ backgroundColor: "#081028", color: "#fff" }} />
            <Legend />
            <Area type="monotone" dataKey="expectedRevenue" stroke="#facc15" fill="#facc1560" name="Expected Revenue" />
            <Area type="monotone" dataKey="actualRevenue" stroke="#a855f7" fill="#a855f760" name="Actual Revenue" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueAreaChart;
