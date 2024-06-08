import React from "react";
import GroupDeviec from "../components/GroupDevice";
import Sidebar from "../components/Sidebar";

function page() {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="w-[80%]">
        <GroupDeviec />
      </div>
    </div>
  );
}

export default page;
