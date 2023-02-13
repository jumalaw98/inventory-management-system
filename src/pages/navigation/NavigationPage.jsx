import React from "react";
import NavBar from "../../components/navigation/NavBar";
import Dashboard from "../../components/navigation/SideBar";

function DashboardPage() {
  return (
    <div className="flex">
      <Dashboard />
      <NavBar />
    </div>
  )
}

export default DashboardPage;