import { Box } from "@chakra-ui/react";
import {JoinView} from "./joinView"
const barmy = require('../assets/barmy.jpg')


export const Banner = () => {
  return (
    <Box
      backgroundImage={barmy}
      backgroundSize="cover"
      backgroundPosition="center"
      minH="50vh"
      minWidth='100%'
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgba(0,0,0,0.5)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <JoinView />
      </Box>
      
    </Box>
  );
};
