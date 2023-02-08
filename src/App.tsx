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
import { ColorModeContextProvider } from "contexts";

function App() {
  return (
    <ColorModeContextProvider>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider}
        Layout={Layout}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "posts",
            list: AntdInferencer,
            edit: AntdInferencer,
            show: AntdInferencer,
            create: AntdInferencer,
            canDelete: true,
          },
        ]}
        routerProvider={routerProvider}
      />
    </ColorModeContextProvider>
  );
}

export default App;
