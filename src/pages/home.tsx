import { Box } from "@chakra-ui/react";
import { Banner } from "./banner";
import { AboutUs } from "./aboutUs";
import { Courses } from "./courses";
import { Quiz } from "./quiz";


export const Home = () => {
  return (
    <Box>
      <Banner />
      <Courses />
      <AboutUs />
    </Box>
  );
};
