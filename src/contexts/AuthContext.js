import { Token } from "@mui/icons-material";
import React, { createContext, useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate= useNavigate()
  useEffect(() => {
    async function user() {
      if (!currentUser) {
        const userToken = JSON.parse(localStorage.getItem("token")).split(
          " "
        )[1];
        fetch("http://localhost:5000/api/profile", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.name === "JsonWebTokenError") {
              localStorage.removeItem("token");
              setCurrentUser(null)
            } else {
              setCurrentUser(data);
            }
          });
      } else {
        navigate("/")
      }
    }
    user();
    console.log(currentUser);
  }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
