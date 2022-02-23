// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Box} from "@chakra-ui/react";
import { Home } from "./pages/home";
import { LoginPage } from "./pages/login";
import { Register } from "./pages/register";
import { AppRouteUi } from "./routes/appRoutes";
import { Navbar } from "./nav/NavBar";
import {Footer} from "./generics/Footer"

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  const protectedComponent = (Component: any) => {
    return isAuthenticated ? (
      <Component />
    ) : (
      <Navigate to={AppRouteUi.Login()} />
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={AppRouteUi.Root()} element={<Home />} />
        <Route
          path={AppRouteUi.Login()}
          element={<LoginPage />}
        />
        <Route
          path={AppRouteUi.Register()}
          element={<Register />}
        />
        {/* <Route
          path={AppRouteUi.Profile()}
          element={protectedComponent(ProfilePage)}
        /> */}
        {/* <Route
          path={AppRouteUi.Login()}
          element={
            isAuthenticated ? (
              <Navigate to={AppRouteUi.Root()} />
            ) : (
              <LoginPage />
            )
          }
        /> */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Box w="100vw" minH="10vh" className="blank">
      </Box>
      <Footer />
    </Router>
  );
}

export default App;