import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import dataProvider from "@pankod/refine-simple-rest";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import routerProvider from "@pankod/refine-react-router-v6";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import NavigationPage from "./pages/navigation/NavigationPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import ReportsPage from "./pages/reports/ReportsPage";

function App() {
  return (
    <Refine
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      resources={[
        {
          name: "home",
          list: AntdInferencer,
        },
      ]}
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            element: <LoginPage />,
            path: "/auth/login",
          },
          {
            element: <SignupPage />,
            path: "/auth/signup",
          },
          {
            element: <NavigationPage />,
            path: "/home",
          },
          {
            element: <DashboardPage />,
            path: "/dashboard",
          },
          {
            element: <InventoryPage/>,
            path: "/inventory",
          },
          {
            element: <ReportsPage/>,
            path: "/reports",
          },
        ],
      }}
    />
  );
}

export default App;