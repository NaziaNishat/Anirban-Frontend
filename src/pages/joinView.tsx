import {
  Box,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react";
import { Colors } from "../config/colors";
import { useNavigate } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";

export const JoinView = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate(AppRouteUi.Register());
  };
  return (
    <Container
      maxW="container.lg"
      px={3}
      py={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      borderRadius={5}
    >
      <Heading
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        fontWeight="regular"
        color={Colors.secondary}
      >
        Looking For Best Defence Preparation Course In Bangladesh?
      </Heading>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={4}
      >
        <Button
          size="lg"
          color={Colors.secondary}
          backgroundColor={Colors.primary}
          onClick={handleSubmit}
          _hover={{
            color: Colors.primary,
            background: Colors.secondary,
          }}
          isDisabled={isAuthenticated}
        >
          Join Now
        </Button>
      </Box>
    </Container>
  );
};
