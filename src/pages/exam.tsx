import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";
import { Colors } from "../config/colors";

export const Exam = () => {
  const navigate = useNavigate();
  const handleExam = async () => {
    navigate(AppRouteUi.Quizzes());
  };
  return (
    <Box
      minH="75vh"
      background={Colors.secondary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW="30%" p={5} background="white" borderRadius={5} shadow="md">
        <Heading
          as="h1"
          size="lg"
          fontWeight="regular"
          color={Colors.primary}
          textAlign="center"
        >
          Online Tests
        </Heading>

        <Stack direction="column" padding={5}>
          <Box
            as="button"
            borderRadius="md"
            bg={Colors.primary}
            color="white"
            onClick={handleExam}
            px={4}
            h={8}
          >
            ISSB Test
          </Box>
          <Box
            as="button"
            borderRadius="md"
            bg={Colors.primary}
            color="white"
            onClick={handleExam}
            px={4}
            h={8}
          >
            Preliminary Test
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
