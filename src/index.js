import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProjectsApp from "./container/ProjectsApp";
import { ToastProvider } from "react-toast-notifications";
ReactDOM.render(
  <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
    <ProjectsApp />
  </ToastProvider>,
  document.getElementById("root")
);
