import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
  { month: "Jan", impressions: 320, clicks: 300, conversation: 340 },
  { month: "Feb", impressions: 290, clicks: 260, conversation: 310 },
  { month: "Mar", impressions: 310, clicks: 240, conversation: 330 },
  { month: "Apr", impressions: 280, clicks: 230, conversation: 300 },
  { month: "May", impressions: 300, clicks: 270, conversation: 320 },
  { month: "Jun", impressions: 330, clicks: 350, conversation: 310 },
  { month: "Jul", impressions: 360, clicks: 400, conversation: 340 },
  { month: "Aug", impressions: 320, clicks: 390, conversation: 330 },
  { month: "Sept", impressions: 310, clicks: 360, conversation: 320 },
  { month: "Oct", impressions: 290, clicks: 330, conversation: 310 },
  { month: "Nov", impressions: 280, clicks: 310, conversation: 300 },
  { month: "Dec", impressions: 270, clicks: 300, conversation: 290 },
];

const DashboardChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-3xl bg-[#0B1739] text-white shadow-xl p-6 rounded-2xl border-none">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Campaigns Metrics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0B1739", borderRadius: "8px", border: "none" }}
                labelStyle={{ color: "#fff" }} 
                itemStyle={{ color: "#fff" }} 
              />
              <Line type="monotone" dataKey="impressions" stroke="#A020F0" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="clicks" stroke="#FF4B4B" strokeWidth={3} dot={{ r: 6, fill: "#FF4B4B" }} />
              <Line type="monotone" dataKey="conversation" stroke="#00FF7F" strokeWidth={3} dot={false} />
              <ReferenceLine x="Jul" stroke="red" strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full" /> <p>Impressions</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" /> <p>Clicks</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full" /> <p>Conversation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardChart;
