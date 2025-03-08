import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "../MarkatingDashboard/Widgets/AnalyticsOverview";
import ProjectPerformanceChart from "./Widgets/PerformanceChart";


const TechDashboard = () => {
  return (
    <Layout>

      {/* Widgets Section */}
      <div className="p-4">
          <AnalyticsOverview />
        </div>
    <div className="p-4">
        <ProjectPerformanceChart />
    </div>
    </Layout>

  );
};

export default TechDashboard;
