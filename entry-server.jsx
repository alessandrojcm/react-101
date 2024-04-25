import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App";

export function render() {
  // This outputs html
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  return { html };
}
