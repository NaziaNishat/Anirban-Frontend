import { NavItemSchema } from "./navItem";
import { AppRouteUi } from "../config/appRoutes";
import { Logout } from "../api/auth";

const isAuthenticated = localStorage.getItem("token") !== null;

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
