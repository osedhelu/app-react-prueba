import React, { useState } from "react";
export const AuthContext = React.createContext({});
export const AuthPrivider = ({ children }: any) => {
  const [user, setUser]: any = useState(null);
  const contextValue = {
    user,
    login() {
      setUser({ id: 1122, name: "exten" });
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user
    }
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
