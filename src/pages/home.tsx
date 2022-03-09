import { Box } from "@chakra-ui/react";
import { Banner } from "./banner";
import { AboutUs } from "./aboutUs";
import { Courses } from "./courses";
import { Quizzes } from "./quizzes";


export const Home = () => {
  return (
    <Box>
      <Banner />
      <Courses />
      <AboutUs />
      <Quizzes />
    </Box>
  );
};
