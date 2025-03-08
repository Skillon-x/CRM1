import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 80 },
  { name: 'May', value: 70 },
  { name: 'Jun', value: 110 },
  { name: 'Jul', value: 130 },
];

const ProjectPerformanceChart = () => {
  return (
    <Card className="bg-[#081028] p-6 rounded-2xl shadow-md border-none">
      <CardContent>
        <h2 className="text-white text-lg font-semibold mb-4">Project Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip cursor={{ fill: "#131520" }} contentStyle={{ backgroundColor: "#0B1739", borderRadius: "8px", border: "none" }} />
            <Bar
              dataKey="value"
              fill="#3B82F6"
              radius={[10, 10, 0, 0]}
              animationBegin={0}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectPerformanceChart;
