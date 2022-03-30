import { NavItemSchema } from "./navItem";
import { AppRouteUi } from "../config/appRoutes";
import { Logout } from "../api/auth";

const isAuthenticated = localStorage.getItem("token") !== null;

// const location = window.location.pathname;
// const isShowNav = (location == "/quiz/:slug") ? false : true;

export const navItems: NavItemSchema[] = isAuthenticated
  ? [
      {
        name: "Home",
        url: AppRouteUi.Root(),
      },
      {
        name: "Courses",
        url: AppRouteUi.Courses(),
      },
      {
        name: "Online Tests",
        url: AppRouteUi.Exam(),
      },
      {
        name: "My Quizzes",
        url: AppRouteUi.MyQuizzes(),
      },
      {
        name: "Logout",
        action: Logout,
      },
    ]
  : [
      {
        name: "Home",
        url: AppRouteUi.Root(),
      },
      {
        name: "Courses",
        url: AppRouteUi.Courses(),
      },
      {
        name: "Online Tests",
        url: AppRouteUi.Exam(),
      },
      {
        name: "Login",
        url: AppRouteUi.Login(),
      },
      {
        name: "Register",
        url: AppRouteUi.Register(),
      },
    ];
