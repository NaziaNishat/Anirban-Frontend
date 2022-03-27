import { Box, Button, Spinner, Stack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetQuizzes } from "../api/quizzes";
import { Colors } from "../config/colors";
import { QuizzesSchema } from "../models/responses/quizzes";
import { useNavigate } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";

export const Quizzes = () => {
  const [quizzes, setQuizzes] = useState<QuizzesSchema[]>([]);
  const [quizzesLoading, setQuizzesLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    setQuizzesLoading(true);
    GetQuizzes()
      .then((res) => {
        setQuizzes(res || []);
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

  const navigate = useNavigate();

  const quizHandler = async (slug: string) => {
    navigate(AppRouteUi.Quiz(), { state: { slug: slug } });
  };

  return (
    <Box
      minH="75vh"
      background={Colors.secondary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {quizzesLoading ? (
        <Spinner />
      ) : (
        <Box minW="50%" p={5} background="white" borderRadius={5} shadow="md">
          <Stack direction="column">
            {quizzes.map((quiz) => (
              <Button key={quiz.id} onClick={() => quizHandler(quiz.slug!)}>
                {quiz.name}
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
