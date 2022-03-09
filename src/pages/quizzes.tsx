import { Box, Heading, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetQuizzes } from "../api/quizzes";
import { Colors } from "../config/colors";
import { QuizzesSchema } from "../models/responses/quizzes";

export const Quizzes = () => {
  const [quizzes, setQuizzes] = useState<QuizzesSchema[]>([]);
  const [quizzesLoading, setQuizzesLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    setQuizzesLoading(true);
    GetQuizzes()
      .then((res) => {
        setQuizzes(res.result || []);
        setQuizzesLoading(false);
        console.log(res);
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

  return (
    <Box>
      {quizzesLoading ? (
        <Spinner />
      ) : (
        <Box background={Colors.secondary} width='1000vw'>
          <Text>Quizzes</Text>
        </Box>
      )}
    </Box>
  );
};
