import { createContext } from "react";
import { UseUserLogin } from "../hooks/UseUserLogin";
import { app } from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

export const Credentials = createContext();

const UserCredentials = ({ children }) => {
  const {
    handleForm,
    isRegistered,
    setIsRegistered,
    user,
    setUser,
    isLoggedIn,
  } = UseUserLogin();

  const closeSesion = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log("sesion close");
    } catch (error) {
      console.log("sesion close", error);
    }
  };

  return (
    <Credentials.Provider
      value={{
        handleForm,
        isRegistered,
        setIsRegistered,
        user,
        setUser,
        isLoggedIn,
        closeSesion,
      }}
    >
      {children}
    </Credentials.Provider>
  );
};

export default UserCredentials;
