import "./src/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";

// This will get loaded, and it will try to match the html rendered on the server
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App {...(window?.__SSR_PROPS__ ?? {})} />
  </React.StrictMode>,
);
