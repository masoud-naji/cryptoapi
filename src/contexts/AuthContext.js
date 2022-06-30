import React, { useState, useEffect, useCallback } from "react";


let logoutTimeout;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjTime = new Date(expirationTime).getTime();
  const remainingTime = adjTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  if (storedToken && storedExpirationTime) {
    const remainingTime = calculateRemainingTime(storedExpirationTime);
    if (remainingTime > 0) {
      return { token: storedToken, duration: remainingTime };
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      return null;
    }
  }
  return null;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken = tokenData ? tokenData.token : "";
  const [token, setToken] = useState(initialToken);
  const userIsLogged = !!token;

  const logoutHandler = useCallback(() => {
    setToken("");
    localStorage.removeItem("token");
    if (logoutTimeout) {
      clearTimeout(logoutTimeout);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    const ActualExpirationTime = new Date(
      new Date().getTime() + +expirationTime * 1000
    );
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", ActualExpirationTime);
    const remainingTime = calculateRemainingTime(ActualExpirationTime);
    logoutTimeout = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      // console.log("tokenData", tokenData.duration);
      logoutTimeout = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLogged,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
