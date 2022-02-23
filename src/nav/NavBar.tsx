import { Box, Heading, Container, Image } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { navItems } from "./navItems";
import { Colors } from "../config/colors";
import { Link } from "react-router-dom";
import { AppRouteUi } from "../routes/appRoutes";
const image = require('../assets/anirban-logo.png')
// import anirban-logo from "";

export const Navbar = () => {
  return (
    <Box>
      <Box bg={Colors.primary}>
        <Container maxW="container.lg">
          <Box position="relative">
            <Box
              position="absolute"
              top={0}
              left={0}
              padding={3}
              background="white"
              zIndex={999}
              maxWidth="110px"
            >
              <Image src={image} alt="SUST" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding={3}
            >
              <Heading
                as={Link}
                size="lg"
                display="flex"
                alignItems="center"
                to={`${AppRouteUi.Root()}`}
                paddingLeft={["30%", "20%", "15%", "13%"]}
                fontWeight="regular"
                color={Colors.secondary}
              >
                Anirban Defence Academy
              </Heading>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxW="container.lg" display="flex" justifyContent="end">
          <Box my={5}>
            <Nav items={navItems} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
