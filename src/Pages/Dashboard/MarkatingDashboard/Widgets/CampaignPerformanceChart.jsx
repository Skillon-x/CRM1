import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Jan", email: 200, social: 150 },
  { name: "Feb", email: 500, social: 300 },
  { name: "Mar", email: 250, social: 180 },
  { name: "Apr", email: 400, social: 250 },
  { name: "May", email: 450, social: 320 },
  { name: "Jun", email: 600, social: 400 },
  { name: "Jul", email: 500, social: 350 },
  { name: "Aug", email: 420, social: 300 },
  { name: "Sep", email: 480, social: 280 },
  { name: "Oct", email: 520, social: 340 },
  { name: "Nov", email: 550, social: 380 },
  { name: "Dec", email: 600, social: 320 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 rounded-lg shadow-lg text-sm border-none">
        <p className="font-bold">{payload[0].payload.name}</p>
        <p className="text-blue-500">Email: {payload[0].value}</p>
        <p className="text-cyan-500">Social Media: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const CampaignPerformanceChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-290"
    >
      <Card className="bg-[#0B1739] text-white shadow-xl p-5 rounded-xl border-none ml-4">
        <CardContent>
          <h2 className="text-lg font-bold">
            Campaign Performance <span className="text-green-400">(+5)</span>
          </h2>
          <p className="text-sm text-gray-400">more in 2021</p>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEmail" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSocial" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              <Area
                type="monotone"
                dataKey="email"
                stroke="#2563eb"
                fillOpacity={1}
                fill="url(#colorEmail)"
              />
              <Area
                type="monotone"
                dataKey="social"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorSocial)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CampaignPerformanceChart;
