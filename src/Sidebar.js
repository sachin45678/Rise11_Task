import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-100 w-1/5 min-h-screen p-5">
      <h2 className="text-lg font-bold">Jur</h2>
      <ul className="mt-10 space-y-4">
        <li>Dashboard</li>
        <li>My Cases</li>
        <li>Activities</li>
        <li>Calendar</li>
        <li>Files</li>
        <li>Open a Dispute</li>
      </ul>
      <div className="justice-banner mt-auto p-4 bg-blue-200 rounded-lg">
        <p>Get Justice on every Claims</p>
      </div>
    </div>
  );
};

export default Sidebar;
