
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "typeface-roboto";
import { BrowserRouter } from "react-router-dom";
import QuickLinksProvider from './Context/Context.jsx';

const globalDomain = import.meta.env.VITE_BACKEND_URL;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuickLinksProvider globalDomain={globalDomain}>
        <App globalDomain={globalDomain}/>
      </QuickLinksProvider>
    </BrowserRouter>
  </React.StrictMode>
);