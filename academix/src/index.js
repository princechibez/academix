import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./styles/theme";

import Router from "./Router";

export const AuthContext = createContext(null);

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [token]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AuthContext.Provider value={{ token, setToken }}>
            <Router />
          </AuthContext.Provider>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
