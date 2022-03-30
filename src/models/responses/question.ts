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
  selected?: boolean;
};

export type AnswerSchema = {
  id?: string;
  question?: string;
  label?: string;
};
