import React from "react";
import Sidebar from "./Shared/Sidebar";
import Header from "./Shared/Header";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import AnalyticsChart from "./Widgets/AnalyticsChart";
import ProjectTable from "./Widgets/projecttable";
import RecentActivity from "./Widgets/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header username="John" />

      {/* Widgets Section */}
      <div className="p-6">
          <AnalyticsOverview />
          <AnalyticsChart />

          <div className="p-6 bg-[#0A122A] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>

      {/* Add the ProjectTable component */}
      <ProjectTable />
      <div className="py-6 bg-[#0A122A]  text-white"></div>
      <RecentActivity />
      </div>
      </div>
      </div>
    </div>

  );
};

export default Dashboard;
