import React from "react";
import Layout from "./Shared/Layout";
import AnalyticsOverview from "../MarkatingDashboard/Widgets/AnalyticsOverview";
import OrderTable from "./Widgets/OrderTable";

const SalesRevenue = () => {
  return (
    <Layout>
    {/* Widgets Section */}
    <div className="p-4">
          <AnalyticsOverview />
          <OrderTable />

      </div>
    </Layout>
  );
};

export default SalesRevenue;
