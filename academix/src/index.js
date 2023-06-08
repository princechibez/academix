import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./styles/theme";

import Router from "./Router";

export const AuthContext = createContext(null);

const App = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const expiresIn = localStorage.getItem("expiresIn");
    // if (expiresIn > new Date().getUTCDate()) {
    //   localStorage.clear("token");
    //   localStorage.clear("expiresIn");
    // }
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setUser(user);
    setToken(token);
  }, [token, user]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            <Router />
          </AuthContext.Provider>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
