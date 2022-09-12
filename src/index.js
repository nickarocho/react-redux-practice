import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureStore from "./store";

const container = document.getElementById("app");
const root = createRoot(container);

const { store, persistor } = configureStore();

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
