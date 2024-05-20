import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FlagProvider from "@unleash/proxy-client-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CookingTips from "./Pages/CookingTips";
import Recipes from "./Pages/Recipes";
import InternationalFood from "./Pages/InternationalFood";

const config = {
  url: "http://localhost:4242/api/frontend", // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey:
    "*:development.fff6eee80f717f8aac748fdb5d4854f071ab499e9d6274dcc287ff15", // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: "recipes-app", // The name of your application. It's only used for identifying your application
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/cooking-tips" element={<CookingTips />} />
          <Route path="/international-food" element={<InternationalFood />} />
        </Routes>
      </Router>
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
