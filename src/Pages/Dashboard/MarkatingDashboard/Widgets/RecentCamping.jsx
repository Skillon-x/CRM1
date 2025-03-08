import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const recentCampaigns = [
  { title: "Latest marketing activities and status", date: "22 DEC 7:20 PM" },
  { title: "Social media engagement campaign active", date: "21 DEC 9:28 PM" },
  { title: "Paid Advertising", date: "20 DEC 3:52 PM" },
  { title: "Email Marketing Campaigns", date: "19 DEC 11:35 PM" },
  { title: "International Campaigns", date: "18 DEC 4:41 PM" },
];

const RecentCampaigns = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#0B1739] text-white shadow-xl p-6 rounded-2xl border-none">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Recent Campaigns</h2>
            <CheckCircle className="text-green-400" size={20} />
          </div>

          <div className="space-y-6">
            {recentCampaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <p className="text-sm font-semibold">{campaign.title}</p>
                </div>
                <p className="text-xs text-gray-400 ml-4">{campaign.date}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecentCampaigns;
