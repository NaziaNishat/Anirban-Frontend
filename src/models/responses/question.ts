export type QuestionSchema = {
  id?: string;
  answer_set?: {
    id?: string;
    question?: string;
    label?: string;
  };
  label?: string;
  order?: string;
  quiz?: string;
};

export type AnswerSchema = {
  id?: string;
  question?: string;
  label?: string;
};
