import React, { createContext, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";

import theme from "./styles/theme";

import AppRoutes from "./Router";

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
      <MUIThemeProvider theme={theme}>
        <CssBaseline>
          <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            <AppRoutes />
          </AuthContext.Provider>
        </CssBaseline>
      </MUIThemeProvider>
    </React.StrictMode>
  );
};

export default App;
