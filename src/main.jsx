import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginContext from "./context/LoginContext.jsx";
import UserInfo from "./context/UserInfo.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContext>
      <UserInfo>
        <App />
      </UserInfo>
    </LoginContext>
  </BrowserRouter>
);
