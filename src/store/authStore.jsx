import { createContext, useContext, useState, useEffect } from "react";
import { Await } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, SetIsLoading] = useState(true);
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let issLoggedIn = !!token;

  console.log("issLoggedIn", issLoggedIn);

  const LogoutUser = () => {
    setToken("");

    return localStorage.removeItem("token");
  };

  // -----------------currently loggedin userdata----------------------------------
  const userAuthentication = async () => {
    try {
      SetIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();

        console.log("user data", data.userData);
        setUser(data.userData);
        SetIsLoading(false);
      } else {
        console.log("error fetching user data");
        SetIsLoading(false);
      }
    } catch (error) {
      console.log("error during fetching user data");
    }
  };

  // --------------------------------------to fetch services data from backend

  const userServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("service data", data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log("erorr from services", error);
    }
  };

  useEffect(() => {
    userAuthentication();
    userServices();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        issLoggedIn,
        user,
        services,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (authContextValue === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
