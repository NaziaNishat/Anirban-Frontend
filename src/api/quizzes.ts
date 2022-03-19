import { strictEqual } from "assert";
import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { APIResponseSchema } from "../models/apiResponse";
import { SaveAnswerSchema } from "../models/requests/saveanswer";
import { QuestionSchema } from "../models/responses/question";
import { QuizSchema } from "../models/responses/quiz";
import { QuizzesSchema } from "../models/responses/quizzes";

export const GetQuizzes = async () => {
  const res = await AxiosAuth.get<QuizzesSchema[]>(AppRouteApi.Quizzes());
  return res.data;
};

export const GetQuiz = async () => {
  const res = await AxiosAuth.get<QuizSchema>(AppRouteApi.Quiz());

  return res.data;
};

export const GetSingleQuiz = async (Id: number) => {
  const res = await AxiosAuth.get<QuestionSchema>(AppRouteApi.Quiz(), {
    params: {
      id: Id,
    },
  });

  return res.data;
};

export const GetSaveAnswer = async (data: SaveAnswerSchema) => {
  const res = await AxiosAuth.patch(AppRouteApi.SaveAnswer(), data);
  return res.data;
}