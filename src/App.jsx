import AppRouter from "./routes/AppRouter";
import { UserLogin } from "./context/LoginContext";
import { useContext } from "react";
import Register from "./pages/Register";

const App = () => {
  const { user } = useContext(UserLogin);

  return <>{user ? <AppRouter /> : <Register />}</>;
};

export default App;
