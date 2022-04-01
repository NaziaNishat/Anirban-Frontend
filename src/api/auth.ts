import axios from "axios";
import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { APIResponseSchema } from "../models/apiResponse";
import { LoginRequestSchema } from "../models/requests/login";
import { RegisterSchema } from "../models/requests/register";
import { TokenSchema } from "../models/responses/token";
import { resSchema } from "../models/resSchema";
import jwtDecode, { JwtPayload } from "jwt-decode";
export const Login = async (credentials: LoginRequestSchema) => {
  try {
    const res = await axios.post<TokenSchema>(AppRouteApi.Login(), credentials);
    if (
      // res.data.validationResult.isValid &&
      // res.data.result?.access_token &&
      // res.data.result?.refresh_token

      res.data?.access &&
      res.data?.refresh
    ) {
      const decodedToken = jwtDecode<any>(res.data.access);
      localStorage.setItem("userId", decodedToken.id);
      // localStorage.setItem("token", res.data.result.access);
      // localStorage.setItem("refresh_token", res.data.result.refresh);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    // return false;
  }
};

export const Register = async (data: RegisterSchema) => {
  try {
    const res = await AxiosAuth.post<resSchema>(AppRouteApi.Register(), data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const Logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};
