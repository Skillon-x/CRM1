import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 fixed inset-y-0 left-0 z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Fixed Header */}
        <div className="fixed top-0 left-64 right-0 bg-gray-900 z-10">
          <Header username="John" />
        </div>

        {/* Page Content with padding to avoid overlap */}
        <div className="mt-16 p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
