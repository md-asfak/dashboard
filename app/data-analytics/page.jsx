import React from "react";
import DataAnalytics from "../components/DataAnalytics";
import Sidebar from "../components/Sidebar";

function page() {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="w-[80%] ">
        <DataAnalytics />
      </div>
    </div>
  );
}

export default page;
