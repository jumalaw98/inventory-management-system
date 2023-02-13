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
import DashboardPage from "./pages/navigation/DashboardPage";

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
          name: "dashboard",
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
            element: <DashboardPage />,
            path: "/dashboard",
          },
        ],
      }}
    />
  );
}

export default App;