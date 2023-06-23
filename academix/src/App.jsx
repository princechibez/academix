import React, { createContext, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";

import theme from "./styles/theme";

import AppRoutes from "./Router";
import { timer } from "./utility/logoutTimer";

export const AuthContext = createContext(null);

const App = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  setInterval(() => {
    timer()
  }, 1000);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setUser(user);
    setToken(token);
  }, [token, user]);

  return (
    <React.StrictMode>
      <ProSidebarProvider>
        <MUIThemeProvider theme={theme}>
          <CssBaseline>
            <AuthContext.Provider
              value={{ token, setToken, user, setUser }}
            >
              <AppRoutes />
            </AuthContext.Provider>
          </CssBaseline>
        </MUIThemeProvider>
      </ProSidebarProvider>
    </React.StrictMode>
  );
};

export default App;
