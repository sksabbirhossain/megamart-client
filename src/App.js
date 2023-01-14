import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SignIn from "./pages/SignIn/SignIn";
import Signup from "./pages/Signup/Signup";
import { themeSettings } from "./theme/themeSettings";

function App() {
  const mode = "light";

  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
