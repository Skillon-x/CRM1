"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    name: "Chakra Soft UI Version",
    members: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/lego/1.jpg",
    ],
    budget: "$14,000",
    completion: 100,
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jira_Logo.svg",
    name: "Add Progress Track",
    members: [
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    name: "Fix Platform Errors",
    members: ["https://randomuser.me/api/portraits/men/3.jpg"],
    budget: "Not set",
    completion: 100,
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    name: "Launch our Mobile App",
    members: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/lego/2.jpg",
    ],
    budget: "$32,000",
    completion: 100,
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    name: "Add the New Pricing Page",
    members: [
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/men/7.jpg",
    ],
    budget: "$400",
    completion: 25,
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/InVision-logo.svg",
    name: "Redesign New Online Shop",
    members: [
      "https://randomuser.me/api/portraits/men/8.jpg",
      "https://randomuser.me/api/portraits/women/9.jpg",
    ],
    budget: "$7,600",
    completion: 40,
  },
];

const ProjectTable = () => {
  return (
    <Card className="bg-[#0B1739] text-white shadow-xl p-6 rounded-2xl border-none">
      <CardHeader>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CardTitle className="text-lg font-semibold flex items-center">
            ✅ <span className="ml-2">30 done this month</span>
          </CardTitle>
        </motion.div>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left py-2">COMPANIES</th>
              <th className="text-left py-2">MEMBERS</th>
              <th className="text-left py-2">BUDGET</th>
              <th className="text-left py-2">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-700"
              >
                <td className="flex items-center py-3">
                  <img src={project.logo} alt={project.name} className="w-5 h-5 mr-2" />
                  {project.name}
                </td>
                <td>
                  <div className="flex -space-x-2">
                    {project.members.map((avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt="Member"
                        className="w-6 h-6 rounded-full border-2 border-gray-800"
                      />
                    ))}
                  </div>
                </td>
                <td className="text-gray-300">{project.budget}</td>
                <td className="w-32">
                  <div className="flex items-center space-x-2">
                    <Progress value={project.completion} className="bg-gray-700 h-2 rounded-full transition-all duration-300 ease-in-out" />
                    <span className="text-gray-300 text-sm">{project.completion}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ProjectTable;
