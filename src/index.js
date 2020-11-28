import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StoriesProvider } from "./context/StoriesContext";
import { NewslettersProvider } from "./context/NewslettersContext";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <NewslettersProvider>
        <StoriesProvider>
          <App />
        </StoriesProvider>
      </NewslettersProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
