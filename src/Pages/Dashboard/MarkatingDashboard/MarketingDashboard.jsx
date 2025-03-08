import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import CampaignPerformanceChart from "./Widgets/CampaignPerformanceChart";
import DashboardEvents from "./Widgets/DashboardEvents";

const MarketingDashboard = () => {
  return (
    <Layout>
       {/* Widgets Section */}
            <div className="p-4">
                <AnalyticsOverview />
      </div>
       {/* Widgets Section */}
       <div className="p-4">
          <CampaignPerformanceChart />
        </div> 
       {/* Widgets Section */}
       <div className="p-4">
          <DashboardEvents />
        </div> 
    </Layout>

  );
};

export default MarketingDashboard;
