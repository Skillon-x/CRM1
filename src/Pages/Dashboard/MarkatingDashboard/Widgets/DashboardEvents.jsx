import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"; // Ensure using ShadCN Calendar
import { cn } from "@/lib/utils"; // Tailwind utility function

const recentCampaigns = [
  { title: "Latest marketing activities and status", date: "22 DEC 7:20 PM" },
  { title: "Social media engagement campaign active", date: "21 DEC 9:28 PM" },
  { title: "Paid Advertising", date: "20 DEC 3:52 PM" },
  { title: "Email Marketing Campaigns", date: "19 DEC 11:35 PM" },
  { title: "International Campaigns", date: "18 DEC 4:41 PM" },
];

const months = ["January", "February", "March"];
const year = 2025;

// Define highlighted dates per month
const highlightedDates = { 
  January: [5, 12, 18, 24, 30], // Highlight some dates in January
  February: [3, 9, 14, 22, 28], // Highlight some dates in February
  March: [7, 13, 19, 25, 31], // Highlight some dates in March
};

const DashboardEvents = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6">
      {/* Upcoming Events Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Card className="bg-[#0B1739] text-white shadow-xl p-5 rounded-2xl border-none">
          <CardContent>
            <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {months.map((month, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-md font-semibold text-gray-300">
                    {month} {year}
                  </h3>
                  <Calendar
                    className="bg-transparent text-white border-none"
                    mode="single"
                    selected={null}
                    renderDay={(day) => {
                      const isHighlighted = highlightedDates[month]?.includes(day.getDate());
                      return (
                        <div
                          className={cn(
                            "w-8 h-8 flex items-center justify-center rounded-full",
                            isHighlighted ? "bg-blue-500 text-white font-bold" : "text-gray-300"
                          )}
                        >
                          {day.getDate()}
                        </div>
                      );
                    }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Campaigns Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Card className="bg-[#0B1739] text-white shadow-xl p-5 rounded-2xl border-none">
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Recent Campaigns</h2>
              <CheckCircle className="text-green-400" size={20} />
            </div>

            <div className="space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">{campaign.title}</p>
                    <p className="text-xs text-gray-400">{campaign.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardEvents;
