import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import CalendarSidebar from "../SalesDashboard/Widgets/CalendarSidebar";
import Calendar from "../SalesDashboard/Widgets/Calandar";


const MarketingCalander = () => {
  return (
    <Layout>
       {/* Widgets Section */}
            <div className="p-4">
                <AnalyticsOverview />
      </div>
      <div className="p-4 flex">
        <CalendarSidebar />
    <div className="p-4 flex-1">
        <Calendar />
    </div>
        
    </div>
    </Layout>

  );
};

export default MarketingCalander;
