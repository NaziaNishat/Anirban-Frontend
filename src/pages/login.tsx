import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../config/colors";
import { Login } from "../api/auth";
import { errorToast } from "../utils/toasts";

export const LoginPage = () => {

  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    // const toast = useToast();

  const isDisabled = useMemo(
    () =>
      !(
        (email && password)
        // && email.trim().toLowerCase().endsWith("@sust.edu")
      ),
    [password, email]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await Login({
        email: email,
        password: password,
      });

      // if (response?.validationResult.isValid)
      window.location.href = "/";
      // else toast(errorToast(response));
    } catch (error) {
      // toast(errorToast());
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Box
      minH="75vh"
      background={Colors.secondary}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW="50%" p={5} background="white" borderRadius={5} shadow="md">
        <Heading as="h1" size="lg" fontWeight="regular" color={Colors.primary}>
          Log In
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={4}>
            <FormLabel htmlFor="Email">Email</FormLabel>
            <Input
              id="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            isLoading={isLoading}
            isDisabled={isDisabled}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

