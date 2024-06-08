import React from "react";
import Shedule from "../components/Shedule";
import Sidebar from "../components/Sidebar";

function page() {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="w-[80%]">
        <Shedule />
      </div>
    </div>
  );
}

export default page;
