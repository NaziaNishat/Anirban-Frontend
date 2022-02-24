import { Box } from "@chakra-ui/react";
import { Banner } from "./banner";
import { AboutUs } from "./aboutUs";
import { Courses } from "./courses";


export const Home = () => {
  return (
    <Box>
      <Banner />
      <Courses />
      <AboutUs />
    </Box>
  );
};
