// import React, { createContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import { CssBaseline, ThemeProvider } from "@mui/material";

// import theme from "./styles/theme";

// import Router from "./Router";

// export const AuthContext = createContext(null);

// const App = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     setToken(token);
//   }, []);

//   return (
//     <React.StrictMode>
//       <ThemeProvider theme={theme}>
//         <CssBaseline>
//           <AuthContext.Provider value={{ token }}>
//             <Router />
//           </AuthContext.Provider>
//         </CssBaseline>
//       </ThemeProvider>
//     </React.StrictMode>
//   );
// };

// export default App;
