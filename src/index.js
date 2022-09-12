import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
