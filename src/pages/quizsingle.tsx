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
  import { GetQuiz } from "../api/quizzes";
  import { Colors } from "../config/colors";
  import { QuestionSchema } from "../models/responses/question";
  import { QuizSchema } from "../models/responses/quiz";
  
  export const Quiz = () => {
    const [quiz, setQuiz] = useState<QuizSchema>();
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
          console.log(res);
          setQuizLoading(false);
        })
        .catch((err) => {
          toast({
            title: "Error loading data",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }, []);
  
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
            {question.map((q) => (
              <Box
                background={Colors.secondary}
                minW={200}
                borderRadius={5}
                shadow="md"
                p={5}
                margin={5}
              >
                <form onSubmit={handleSubmit}>
                    {/* <Heading>{question[0].label}</Heading> */}
                  {/* <Heading key={q.id}>{q.label}</Heading>
                  <RadioGroup>
                    {q.answer_set instanceof Array ? (
                      <SimpleGrid column={2}>
                        {q.answer_set!.map((options, index) => (
                          <Box>
                            <Radio
                              size="md"
                              colorScheme="green"
                              key={index}
                              value={options.id}
                            >
                              {options.label}
                            </Radio>
                          </Box>
                        ))}
                      </SimpleGrid>
                    ) : null}
                  </RadioGroup>
                  <Button bg={Colors.tertiary}>Prev</Button>
                  <Button bg={Colors.tertiary} textAlign="right">Next</Button> */}
                  {/* <Button
                    mt={4}
                    type="submit"
                    mx="auto"
                    bgColor={Colors.quaternary}
                    // variantColor="teal"
                    // isLoading={isLoading}
                    // isDisabled={isDisabled}
                  >Submit</Button> */}
                </form>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    );
  };
  