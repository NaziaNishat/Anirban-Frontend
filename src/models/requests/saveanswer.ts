export type SaveAnswerSchema = {
    quiz: string;
    question: string;
    answer: string
};

export type SubmitAnswerSchema = {
    quiz: string;
    question: string;
    answer: string | null
};
  
  