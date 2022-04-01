import { Box, Heading, Container, Image } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { navItems } from "./navItems";
import { Colors } from "../config/colors";
import { Link } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";
const image = require("../assets/odommo_green1.png");

export const Navbar = () => {
  return (
    <Box>
      <Box bg={Colors.primary}>
        <Container maxW="container.lg">
          <Box position="relative">
            <Box position="absolute" background="white" maxWidth="8vh">
              <Image src={image} alt="Odommo" />
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
                paddingLeft={["25%", "18%", "12%", "10%"]}
                fontSize={{ base: "20px", md: "30px", lg: "30px" }}
                color={Colors.secondary}
              >
                ODOMMO DEFENCE & SOLDIERS ACADEMY
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
