import React from "react";
import Layout from "./Shared/layout";
import AnalyticsOverview from "./Widgets/AnalyticsOverview";
import ProductList from "./Widgets/ProductList";


const MarketingProducts = () => {
  return (
    <Layout>
       {/* Widgets Section */}
            <div className="p-4">
                <AnalyticsOverview />
      </div>
      <div className="p-4">
                <ProductList />
      </div>
    </Layout>

  );
};

export default MarketingProducts;
