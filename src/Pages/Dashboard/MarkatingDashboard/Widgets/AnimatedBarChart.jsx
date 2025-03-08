import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Insta", value: 120, color: "#4285F4" }, // Blue
  { name: "F.B", value: 200, color: "#EA4335" }, // Red
  { name: "Twitt", value: 150, color: "#FBBC05" }, // Yellow
  { name: "Linkdn", value: 80, color: "#34A853" }, // Green
  { name: "youtube", value: 70, color: "#0F9D58" }, // Dark Green
  { name: "others", value: 110, color: "#00ACC1" }, // Cyan
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 rounded-md shadow-lg">
        <p className="text-sm font-bold">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const AnimatedBarChart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#081028] text-white shadow-xl p-6 rounded-2xl w-280 ml-4">
        <CardContent>
          <h2 className="text-lg font-bold mb-4">Platform Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barSize={50}>
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedBarChart;
