import axios from "axios";
import React, { useState } from "react";
import { _Storage } from "../localstorage/localstorage";
export const AuthContext = React.createContext({});
export const AuthPrivider = ({ children }: any) => {
  process.env.HOLA = _Storage.get("token")
  const [user, setUser]: any = useState(_Storage.get("token"));
  const contextValue = {
    user,
    login(user: any) {
      setUser(user);
    },
    logout() {
      _Storage.remove("token");
      setUser(null);
    },
    isLogged() {
      return axios.get("http://192.168.10.21/user/auth", {
        headers: { token: _Storage.get("token") },
      });
    },
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
