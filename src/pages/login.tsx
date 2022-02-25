import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../config/colors";

export const LoginPage = () => {
  // const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  // if (isAuthenticated) navigate("/");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  // const isDisabled = useMemo(
  //   () =>
  //     !(
  //       userName &&
  //       password &&
  //       userName.trim().toLowerCase().endsWith("@sust.edu")
  //     ),
  //   [password, userName]
  // );

  

  return (
    <Box
      minH="75vh"
      background={Colors.secondary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW='50%' p={5} background="white" borderRadius={5} shadow="md">
        <Heading as="h1" size="lg" fontWeight="regular" color={Colors.primary}>
          Log In
        </Heading>
        <form>
          <FormControl mt={4}>
            <FormLabel htmlFor="UserName">Email</FormLabel>
            <Input
              id="UserName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            mt={4}
            type="submit"
            mx="auto"
            // variantColor="teal"
            // isLoading={isLoading}
            // isDisabled={isDisabled}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
