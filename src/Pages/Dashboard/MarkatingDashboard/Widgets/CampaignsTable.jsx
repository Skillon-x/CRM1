import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const initialCampaigns = [
  { name: "Jane Cooper", budget: "$5,000", spent: "$3,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 245, leads: 345, status: "Active" },
  { name: "Floyd Miles", budget: "$4,000", spent: "$2,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 187, leads: 260, status: "Inactive" },
  { name: "Ronald Richards", budget: "$6,000", spent: "$3,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 187, leads: 270, status: "Inactive" },
  { name: "Marvin McKinney", budget: "$8,000", spent: "$6,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 162, leads: 290, status: "Active" },
  { name: "Jerome Bell", budget: "$9,000", spent: "$5,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 162, leads: 280, status: "Active" },
  { name: "Kathryn Murphy", budget: "$6,000", spent: "$5,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 162, leads: 278, status: "Active" },
  { name: "Jacob Jones", budget: "$6,000", spent: "$3,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 162, leads: 348, status: "Active" },
  { name: "Kristin Watson", budget: "$7,000", spent: "$3,250", start: "Nov 15, 2023", end: "Dec 15, 2023", roi: 162, leads: 245, status: "Inactive" },
];

const CampaignsTable = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCampaigns = initialCampaigns
    .filter((campaign) =>
      campaign.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.start) - new Date(a.start);
      if (sortOrder === "oldest") return new Date(a.start) - new Date(b.start);
      if (sortOrder === "highest_roi") return b.roi - a.roi;
      if (sortOrder === "lowest_roi") return a.roi - b.roi;
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#0B1739] text-white shadow-xl p-6 rounded-2xl">
        <CardContent>
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">All Campaigns</h2>
            <div className="flex items-center space-x-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
                <Input
                  type="text"
                  placeholder="Search campaigns"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-4 py-2 bg-[#111A40] text-white rounded-md border-none focus:ring-0"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-1 bg-[#111A40] text-white border-none"
                >
                  <span>Sort by: {sortOrder}</span>
                  <ChevronDown size={16} />
                </Button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-[#111A40] text-white shadow-lg rounded-md p-2 w-40">
                    {["Newest", "Oldest", "Highest ROI", "Lowest ROI"].map((label) => (
                      <button
                        key={label}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-[#1A264D] transition"
                        onClick={() => {
                          setSortOrder(label.toLowerCase().replace(" ", "_"));
                          setShowDropdown(false);
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-400 border-b border-gray-600">
                <tr className="text-left">
                  <th className="py-3 px-4 w-[20%]">Name</th>
                  <th className="py-3 px-4 w-[15%]">Budget</th>
                  <th className="py-3 px-4 w-[20%]">Dates</th>
                  <th className="py-3 px-4 w-[10%]">ROI</th>
                  <th className="py-3 px-4 w-[10%]">Leads</th>
                  <th className="py-3 px-4 w-[10%]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.map((campaign, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-700 hover:bg-[#121C48] transition"
                  >
                    <td className="py-4 px-4">{campaign.name}</td>
                    <td className="py-4 px-4">
                      {campaign.budget} <br />
                      <span className="text-gray-400 text-xs">Spent: {campaign.spent}</span>
                    </td>
                    <td className="py-4 px-4">
                      Start: {campaign.start} <br />
                      End: {campaign.end}
                    </td>
                    <td className="py-4 px-4">{campaign.roi}%</td>
                    <td className="py-4 px-4">{campaign.leads}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-bold ${
                          campaign.status === "Active" ? "bg-green-600" : "bg-red-500"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CampaignsTable;
