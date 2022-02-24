import { Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    
    <Box as="footer" bg="gray.900" color="white">
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
        flexDirection={["column", "column", "row", "row"]}
        borderBottom="1px solid"
        pt={3}
      >
        <Box m={2} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            About
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            Join our training program to achieve your dream to join Bangladesh Armed Forces!!
          </Box>
        </Box>
        <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            Anirban Defence Academy Location
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            Click to Open On Google Map : <u><a href="https://maps.app.goo.gl/8SW2VtDbNczgPKSm8https://maps.app.goo.gl/ZAQuXTwtJDbnXsHC9" target="_blank">Anirban Defence Academy, Sylhet</a></u>
          </Box>
        </Box>
        <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            Contact
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            For any query or feedback please phone (24/7):
            <br />
            {/* <a href="mailto:nazia.nishat1971@gmail.com">guest.house@sust.edu</a> */}
            01794775480, 01626662745
          </Box>
        </Box>
        <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            Important Sites
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            Bangladesh Military Academy: <a href="https://www.army.mil.bd/">www.army.mil.bd/</a>
          </Box>
        </Box>
      </Container>

      <Box fontSize="sm" p={4} textAlign="center">
        © {new Date().getFullYear()}, Developed By
        {` `}
        <a href="">Nazia Nishat</a> &amp;{" "}
        <a href="">.... </a>
      </Box>
    </Box>
  );
};
