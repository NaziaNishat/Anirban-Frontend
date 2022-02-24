import { IconButton, Stack } from '@chakra-ui/react'

import { Box, Container } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (

    <Box as="footer" bg="gray.900" color="white">
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
        flexDirection={["column", "row", "row"]}
        borderBottom="1px solid"
        pt={3}
      >
        <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            About
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            {/* Join our training program to achieve your dream to join Bangladesh Armed Forces!! */}
            Odommo Defence & Soldiers Academy is an institution that helps candidates in the preparation journey of admission as a defence officer/soldier in Bangladesh. We're having some really experienced former officer cadets as instructors.
          </Box>
        </Box>
        <Box m={2} minW={300} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            Contact
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            01794775480 / 01626662745 <br />
            Email: odommoofficial@gmail.com <br />
            Mirabazar & Chamelibagh, Sylhet <br />
          </Box>
        </Box>

        {/* <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            Important Sites
          </Box>
          <Box as="p" fontSize="md" mb={4}>
            Bangladesh Military Academy: <a href="https://www.army.mil.bd/">www.army.mil.bd/</a>
          </Box>
        </Box> */}
        <Box m={2} minW={200} p={2}>
          <Box as="h3" fontSize="lg" fontWeight="bold" mb={4}>
            {/* Important Sites */}
          </Box>
          <Stack direction='row'>
          <a href="https://www.facebook.com/odommodefence" target='_blank'><FaFacebook /></a>
          <a href=''><FaLinkedin /></a>
          </Stack>
        </Box>
        
      </Container>

      <Box fontSize="sm" p={4} textAlign="center">
        © {new Date().getFullYear()}
        {/* , Developed By
        {` `}
        <a href="">Nazia Nishat</a> &amp;{" "}
        <a href="">.... </a> */}
      </Box>
    </Box>
  );
};
