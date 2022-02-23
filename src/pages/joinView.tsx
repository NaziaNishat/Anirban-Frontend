import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Colors } from "../config/colors";

export const JoinView = () => {

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
      <Heading fontSize="3xl" fontWeight="regular" color={Colors.secondary}>
        Want To Have The Experience Of A Life Time?
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
          // onClick={handleSubmit}
          _hover={{
            color: Colors.primary,
            background: Colors.secondary,
          }}
          // isDisabled={isDisabled}
          // isLoading={isLoading}
        >
          Join Now
        </Button>
      </Box>
    </Container>
  );
};