import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import DashboardChart from "./Widgets/DashboardChart";
import RecentCampaigns from "./Widgets/RecentCamping";
import CampaignsTable from "./Widgets/CampaignsTable";
const Marketingcampaing = () => {
  return (
    <Layout>
       {/* Widgets Section */}
            <div className="p-4">
                <AnalyticsOverview />
      </div>
      <div className="ml-4 p-4 flex gap-8">
        <DashboardChart />
        <RecentCampaigns  className="flex-1" />

      </div>
      <div className="p-4" >
        <CampaignsTable />
      </div>
    </Layout>

  );
};

export default Marketingcampaing;
