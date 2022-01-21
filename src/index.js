import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./components/FavoriteContext";

ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById("root")
);
