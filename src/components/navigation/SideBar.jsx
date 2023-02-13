import { NavLink } from "@pankod/refine-react-router-v6";
import React from "react";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard() {
  return (
    <div className="border-r-2 border-gry-300 h-screen w-[280px] text-2xl py-8 fixed">
      <h3 className="text-[36px] mx-7 font-gloria">Inventory</h3>
      <div className="flex flex-col justify-between h-full bg-white mx-9 pb-12">
        <div>
          <div className="my-6">
            <NavLink to="/dashboard"><HomeOutlined className="mr-2"/><span>Dashboard</span></NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><ShoppingCartCheckoutIcon className="mr-2"/>Inventory</NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><AssessmentRoundedIcon className="mr-2" />Reports</NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><AccountCircleRoundedIcon className="mr-2" />Suppliers</NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><AddShoppingCartRoundedIcon className="mr-2"/>Orders</NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><StoreIcon className="mr-2"/>Manage Store</NavLink>
          </div>
        </div>
        <div>
          <div className="my-6">
            <NavLink to=""><SettingsIcon className="mr-2"/>Settings</NavLink>
          </div>
          <div className="my-6">
            <NavLink to=""><LogoutIcon className="mr-2" />Logout</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
