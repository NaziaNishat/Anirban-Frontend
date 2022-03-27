import { strictEqual } from "assert";
import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { APIResponseSchema } from "../models/apiResponse";
import { SaveAnswerSchema, SubmitAnswerSchema } from "../models/requests/saveanswer";
import { QuestionSchema } from "../models/responses/question";
import { MyQuizSchema, QuizSchema } from "../models/responses/quiz";
import { QuizzesSchema } from "../models/responses/quizzes";

export const GetQuizzes = async () => {
  const res = await AxiosAuth.get<QuizzesSchema[]>(AppRouteApi.Quizzes());
  return res.data;
};

export const GetQuiz = async (slug: string) => {
  const res = await AxiosAuth.get<QuizSchema>(AppRouteApi.Quiz(slug));

  return res.data;
};

export const GetMyQuiz = async () => {
  const res = await AxiosAuth.get<MyQuizSchema[]>(AppRouteApi.MyQuiz());

  return res.data;
};

// export const GetSingleQuiz = async (Id: number) => {
//   const res = await AxiosAuth.get<QuestionSchema>(AppRouteApi.Quiz(), {
//     params: {
//       id: Id,
//     },
//   });

//   return res.data;
// };

export const GetSaveAnswer = async (data: SaveAnswerSchema) => {
  const res = await AxiosAuth.patch(AppRouteApi.SaveAnswer(), data);
  return res.data;
}

export const GetSubmitAnswer = async (data: SubmitAnswerSchema) => {
  const res = await AxiosAuth.post(AppRouteApi.SubmitAnswer(), data);
  return res.data;
}