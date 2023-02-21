import React from "react";
import NavBar from "../../components/navigation/NavBar";
import Dashboard from "../../components/navigation/SideBar";
import DashboardPage from "../dashboard/DashboardPage";

function NavigationPage() {
  return (
    <div className="flex">
      <Dashboard />
      <NavBar />
    </div>
  )
}

export default NavigationPage;