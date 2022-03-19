import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetQuiz, GetSaveAnswer, GetSingleQuiz } from "../api/quizzes";
import { Colors } from "../config/colors";
import { AnswerSchema, QuestionSchema } from "../models/responses/question";
import { QuizSchema } from "../models/responses/quiz";
import { errorToast } from "../utils/toasts";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [quiz, setQuiz] = useState<QuizSchema>();
  const [answer, setAnswer] = useState<AnswerSchema>();
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [question, setQuestion] = useState<QuestionSchema[]>([]);
  const [quizLoading, setQuizLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    setQuizLoading(true);
    GetQuiz()
      .then((res) => {
        setQuiz(res);
        return res?.quiz?.question_set;
      })
      .then((res: any) => {
        setQuestion(res);
        return res[0].answer_set;
      })
      .then((res) => {
        setAnswer(res);
        console.log(res);

        setQuizLoading(false);
      })
      .catch((err) => {
        console.log(err);

        toast({
          title: "Error loading data",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  }, []);

  const prevHandler = () => {
    return index > 0
      ? (setAnswer(question[index - 1].answer_set), setIndex(index - 1))
      : null;
  };

  const nextHandler = () => {
    return index < question.length - 1
      ? (setAnswer(question[index + 1].answer_set), setIndex(index + 1))
      : null;
  };

  const answerHandler = async (id: number) => {
    await GetSaveAnswer({
      quiztaker: "1",
      question: question[index].id!,
      answer: id,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsLoading(true);
    // try {
    //   const response = await Login({
    //     email: email,
    //     password: password,
    //   });

    //   // if (response?.validationResult.isValid)
    //   window.location.href = "/";
    //   // else toast(errorToast(response));
    // } catch (error) {
    //   // toast(errorToast());
    //   console.log(error);
    // }
    // setIsLoading(false);
  };

  return (
    <Box justifyContent="center" display="flex">
      {quizLoading ? (
        <Spinner />
      ) : (
        <Box>
          <Box
            background={Colors.secondary}
            minW={800}
            borderRadius={5}
            shadow="md"
            p={10}
            margin={20}
          >
            <form onSubmit={handleSubmit}>
              <Heading key={question[index].id}>
                {question[index].label}
              </Heading>
              {answer instanceof Array ? (
                <SimpleGrid column={2}>
                  {answer.map((options, index) => (
                    <Box>
                      <Button
                        size="md"
                        minWidth="100%"
                        border="2px"
                        borderColor="green.500"
                        key={index}
                        value={options.id}
                        onClick={() => answerHandler(options.id)}
                      >
                        {options.label}
                      </Button>
                    </Box>
                  ))}
                </SimpleGrid>
              ) : null}
              <Box display="flex" justifyContent="flex-start">
                <Button
                  mt={5}
                  border="2px"
                  borderColor="green.500"
                  onClick={prevHandler}
                >
                  Prev
                </Button>
                <Button
                  mt={5}
                  ml={5}
                  border="2px"
                  borderColor="green.500"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  mt={5}
                  type="submit"
                  textColor="white"
                  bgColor={Colors.primary}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      )}
    </Box>
  );
};
