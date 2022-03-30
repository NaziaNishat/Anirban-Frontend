import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  useDisclosure,
  useToast,
  ModalHeader,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetQuiz, GetSaveAnswer, GetSubmitAnswer } from "../api/quizzes";
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
  const location = useLocation();
  const {
    isOpen: isSubmitOpen,
    onOpen: onSubmitOpen,
    onClose: onSubmitClose,
  } = useDisclosure();
  // const { isOpen: isDoneOpen, onOpen: onDoneOpen, onClose: onDoneClose } = useDisclosure();

  interface CustomizedState {
    slug: string;
  }

  useEffect(() => {
    setQuizLoading(true);

    const state = location.state as CustomizedState;
    const { slug } = state;

    GetQuiz(slug)
      .then((res) => {
        setQuiz(res);
        console.log(res);

        return res?.quiz?.question_set;
      })
      .then((res: any) => {
        setQuestion(res);
        console.log(res);

        return res[index].answer_set;
      })
      .then((res) => {
        setAnswer(res);
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

  useEffect(() => {
    if (!quizLoading) {
      setAnswer(question[index].answer_set);
    }
  }, [index]);

  const prevHandler = () => {
    return index > 0
      ? (setAnswer(question[index - 1].answer_set), setIndex(index - 1))
      : toast({
          title: "No Previous Questions!",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
  };

  const nextHandler = () => {
    return index < question.length - 1
      ? (setAnswer(question[index + 1].answer_set), setIndex(index + 1))
      : toast({
          title: "No More Questions!",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
  };

  const answerHandler = async (answers: any, id: any) => {
    answers.forEach((x: any) => {
      x.selected = false;
    });
    answers.find((x: any) => x.id === id).selected = true;

    try {
      await GetSaveAnswer({
        quiz: quiz?.quiz?.id!,
        question: question[index].id!,
        answer: id,
      });
    } catch (err) {
      toast(errorToast());
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await GetSubmitAnswer({
        quiz: quiz?.quiz?.id!,
        question: question[index].id!,
        answer: selectedAnswer ? selectedAnswer : null,
      });
      onSubmitOpen();
      window.location.href = "/";
    } catch (err) {
      toast(errorToast());
    }
  };

  return (
    <Box
      width={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "100%", // 48em-62em
        "100%", // 62em+
      ]}
    >
      {quizLoading ? (
        <Spinner />
      ) : (
        <Box>
          <Box bg={Colors.primary} minH="10vh" maxW="100hw"></Box>

          <Box justifyContent="center" display="flex">
            <Box
              background={Colors.secondary}
              width={[
                "90%", // 0-30em
                "90%", // 30em-48em
                "90%", // 48em-62em
                "70%", // 62em+
              ]}
              borderRadius={5}
              shadow="md"
              p={10}
              margin={20}
            >
              {quiz?.quiz?.quiztakers_set?.completed ? (
                <Box>
                  <Center h="15vh">
                    <Heading>You already submitted this quiz!</Heading>
                  </Center>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      onClick={() => (window.location.href = "/")}
                    >
                      Back
                    </Button>
                  </Box>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    maxW={800}
                    overflowX="scroll"
                  >
                    {/* {Array.from(Array(100).keys()).map((a) => (
                    <Button key={a} 

                    size="xs" border="1px">
                      {a}
                    </Button>
                  ))} */}
                    {question.map((q) => (
                      <Button
                        key={q.id}
                        size="xs"
                        border="1px"
                        onClick={() => {
                          let num: number = +q.order!;
                          num = num - 1;
                          setIndex(num);
                        }}
                      >
                        {q.order}
                      </Button>
                    ))}
                  </Box>

                  <Heading key={question[index].id}>
                    {question[index].label}
                  </Heading>
                  {answer instanceof Array ? (
                    <SimpleGrid column={2}>
                      {answer.map((options, index) => (
                        <Box key={index}>
                          <Button
                            m={0.5}
                            size="md"
                            minWidth="100%"
                            border="2px"
                            borderColor={Colors.primary}
                            background={
                              options.selected
                                ? Colors.primary
                                : Colors.secondary
                            }
                            textColor={options.selected ? "white" : "black"}
                            onClick={() => {
                              setSelectedAnswer(options.id);
                              answerHandler(answer, options.id);
                            }}
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
                      borderColor={Colors.primary}
                      onClick={prevHandler}
                    >
                      Prev
                    </Button>
                    <Button
                      mt={5}
                      ml={5}
                      border="2px"
                      borderColor={Colors.primary}
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

                    <Modal
                      onClose={onSubmitClose}
                      isOpen={isSubmitOpen}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader></ModalHeader>
                        {/* <ModalCloseButton /> */}
                        <ModalBody>
                          <Heading>Quiz Submitted!</Heading>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onSubmitClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    {/* <Modal onClose={onDoneClose} isOpen={isDoneOpen} isCentered>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                          <Heading>Already Submitted!</Heading>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onDoneClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal> */}
                  </Box>
                </form>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
