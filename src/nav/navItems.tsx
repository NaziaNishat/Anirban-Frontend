import { NavItemSchema } from "./navItem";
import { AppRouteUi} from "../routes/appRoutes";

// const isAuthenticated = localStorage.getItem("token") !== null;

export const navItems: NavItemSchema[] = [
      {
        name: "Home",
        url: AppRouteUi.Root(),
      },
      {
        name: "Login",
        url: AppRouteUi.Login(),
      },
      {
        name: "Register",
        url: AppRouteUi.Register(),
      },
    ]
  
