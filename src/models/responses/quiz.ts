export type QuizSchema = {
  quiz?: {
    id?: string;
    quiztakers_set?: {
      id?: string;
      usersanswer_set?: {
        id?: string;
        quiz_taker?: number;
        question?: number;
        answer?: number;
      };
      score?: number;
      completed: boolean;
      date_finished?: string;
      timestamp?: string;
      user?: string;
      quiz?: string;
    };
    question_set?: {
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
    name?: string;
    description?: string;
    slug?: string;
    roll_out?: string;
    timestamp?: string;
    duration?: string;
  };
  last_question_id?: string;
};
