import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
