import React from "react";
import Sidebar from "./Shared/Sidebar";
import Header from "./Shared/Header";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import Todaysales from "./Widgets/Todaysales";

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
      <div className="p-6 mr-70">
          <Todaysales />
 

      </div>

      </div>
    </div>
    </div>

  );
};

export default Dashboard;
