import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AdminModule from "./modules/admin";
import ShopModule from "./modules/shop";
import ReactDOM from "react-dom/client";
import theme from "./assets/theme";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminModule />} />
        <Route path="/shop/*" element={<ShopModule />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
