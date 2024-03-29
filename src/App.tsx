// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Courses } from "./pages/courses";
import { AppRouteUi } from "./config/appRoutes";
import { Navbar } from "./nav/NavBar";
import { Footer } from "./generics/Footer";
import { Exam } from "./pages/exam";
import { Quizzes } from "./pages/quizzes";
import { Quiz } from "./pages/quiz";
import { MyQuiz } from "./pages/myQuiz";

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
      <Routes>
        <Route
          path={AppRouteUi.Root()}
          element={
            <>
              <Navbar /> <Home />
            </>
          }
        />
        <Route
          path={AppRouteUi.Courses()}
          element={
            <>
              <Navbar /> <Courses />
            </>
          }
        />
        <Route
          path={AppRouteUi.Exam()}
          element={
            <>
              <Navbar /> <Exam />
            </>
          }
        />
        <Route
          path={AppRouteUi.Quizzes()}
          element={
            <>
              <Navbar /> <Quizzes />
            </>
          }
        />
        <Route
          path={AppRouteUi.MyQuizzes()}
          element={
            <>
              <Navbar /> <MyQuiz />
            </>
          }
        />
        <Route path={AppRouteUi.Quiz()} element={<Quiz />} />
        <Route
          path={AppRouteUi.Login()}
          element={
            <>
              <Navbar /> <LoginPage />
            </>
          }
        />
        <Route
          path={AppRouteUi.Register()}
          element={
            <>
              <Navbar /> <RegisterPage />
            </>
          }
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
      <Box w="100vw" minH="10vh" className="blank"></Box>
      <Footer />
    </Router>
  );
}

export default App;
