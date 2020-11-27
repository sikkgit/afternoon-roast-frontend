import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StoriesProvider } from "./context/StoriesContext";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <StoriesProvider>
        <App />
      </StoriesProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
