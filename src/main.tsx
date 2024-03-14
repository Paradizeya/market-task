import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";
import App from "./App.tsx";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
