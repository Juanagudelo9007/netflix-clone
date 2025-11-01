import React from "react";
import { createContext } from "react";
import { UseUserLogin } from "../hooks/UseUserLogin";

export const Credentials = createContext();

const UserCredentials = ({ children }) => {
  const { handleForm, isRegistered, setIsLogged, isLogged, setIsRegistered } =
    UseUserLogin();

  return (
    <Credentials.Provider
      value={{
        handleForm,
        isRegistered,
        setIsLogged,
        isLogged,
        setIsRegistered,
      }}
    >
      {children}
    </Credentials.Provider>
  );
};

export default UserCredentials;
