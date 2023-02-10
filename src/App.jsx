import React from "react";
import "./index.css";

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
import LoginForm from "./pages/auth/LoginForm";

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
            name: "post",
            list: AntdInferencer,
          },
          {
            name: "Dashboard",
            list: LoginForm,
          },
        ]}
        routerProvider={routerProvider}
      />
  );
}

export default App;
