import { PropsWithChildren } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ChakraProvider>
      <Box w="100vw" minH="100vh" className="layout">
        {children}
      </Box>
    </ChakraProvider>
  );
};
