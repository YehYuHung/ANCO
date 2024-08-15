import "./index.css";
import reactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("root");
const root = reactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
