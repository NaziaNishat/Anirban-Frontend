import {
  Box,
  Spinner,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetMyQuiz, GetQuiz } from "../api/quizzes";
import { Colors } from "../config/colors";
import { MyQuizSchema } from "../models/responses/quiz";

export const MyQuiz = () => {
  const [quizProfileLoading, setQuizProfileLoading] = useState(true);
  const [quizProfile, setQuizProfile] = useState<MyQuizSchema[]>([]);
  const toast = useToast();

  useEffect(() => {
    setQuizProfileLoading(true);
    GetMyQuiz()
      .then((res) => {
        setQuizProfile(res);
        console.log(res);
        setQuizProfileLoading(false);
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

  return (
    <Box
      minH="75vh"
      background={Colors.secondary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {quizProfileLoading ? (
        <Spinner />
      ) : (
        <Box>
          {quizProfile.length ? (
            <Box>
              {quizProfile.map((q, index) => (
                <Box
                  key={index}
                  minW="60vw"
                  m={5}
                  p={5}
                  background="white"
                  borderRadius={5}
                  shadow="md"
                  alignItems="center"
                >
                  <Box> Quiz: {q.name}</Box>
                  <Box>Description: {q.description}</Box>
                  <Box>Score: {q.score}</Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Box>
              <Heading>No Quizzes Attempted!</Heading>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
