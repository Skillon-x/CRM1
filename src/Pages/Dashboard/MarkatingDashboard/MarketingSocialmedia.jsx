import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import AnimatedBarChart from "./Widgets/AnimatedBarChart";



const MarketingSocialmedia = () => {
  return (
    <Layout>
       {/* Widgets Section */}
            <div className="p-4">
                <AnalyticsOverview />
      </div>
      <div className="ml-4 p-4 ">
        <AnimatedBarChart />
      </div>

    </Layout>

  );
};

export default MarketingSocialmedia;
