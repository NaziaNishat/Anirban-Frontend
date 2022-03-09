import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { APIResponseSchema } from "../models/apiResponse";
import { QuizzesSchema } from "../models/responses/quizzes";


export const GetQuizzes = async () => {
  const res = await AxiosAuth.get<APIResponseSchema<QuizzesSchema[]>>(
    AppRouteApi.Quizzes()
  );
  return res.data;
};