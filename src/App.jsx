import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";


const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
