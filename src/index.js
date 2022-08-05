import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider as Authentication } from "./context/Authentication";

ReactDOM.render(
  <HashRouter>
    <Authentication>
      <App />
    </Authentication>
  </HashRouter>,
  document.getElementById("root")
) 