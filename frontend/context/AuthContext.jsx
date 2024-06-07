import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    isAdmin: JSON.parse(localStorage.getItem("isAdmin")),
  });

  const login = (token, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    setAuth({ token, isAdmin });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setAuth({ token: null, isAdmin: false });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedIsAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    if (storedToken && storedIsAdmin !== null) {
      setAuth({ token: storedToken, isAdmin: storedIsAdmin });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
