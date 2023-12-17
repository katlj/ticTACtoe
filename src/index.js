//this file is the bridge between the app components
//and the web browser
import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client";// Reacts library to talk to web browser
import "./styles.css";// styles for components

import App from "./App";// the component create din app.js

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);