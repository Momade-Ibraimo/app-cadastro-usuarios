import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GLstyles/globalStyle";
import Routes from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routes /> 
  </React.StrictMode>
);
