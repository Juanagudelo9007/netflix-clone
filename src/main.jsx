import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginContext from "./context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContext>
      <App />
    </LoginContext>
  </BrowserRouter>
);
