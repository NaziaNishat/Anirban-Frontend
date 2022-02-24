import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
    Container,
    Text,
    Stack
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Colors } from "../config/colors";
const raqib = require('../assets/raqib.jpeg')
const nihal = require('../assets/nihal.jpeg')


export const AboutUs = () => {
    return (
        <Box>
            {/* <Box
                background={Colors.secondary}
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                p={5}
            >
                <Heading
                    as="h1"
                    textAlign="center"
                    fontWeight="regular"
                    color={Colors.primary}
                    size="xl"
                    mb={5}
                >
                    Our Courses
                </Heading>
            </Box> */}
            <Box pb={5}>
                <Container maxW="container.xl" mb={5}>
                    <Box>
                        <Heading
                            backgroundColor={Colors.secondary}
                            size="lg"
                            p={3}
                            textAlign="center"
                            mt={2}
                        >
                            Board Of Directors
                        </Heading>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            width="100%"
                            justifyContent="space-evenly"
                        >
                            <Stack>
                            <Box
                                height="180px"
                                width="180px"
                                m={4}
                                backgroundSize="cover"
                                display="flex"
                                flexDir="column"
                                justifyContent="end"
                                color="white"
                                // _hover={{
                                //     width: "350px",
                                //     height: "350px"
                                // }}
                                
                            >
                                <img src={raqib}></img>
                            </Box>
                            <Box>
                                <Text align="center">Md Raqib Ahmed Chowdhury <br />
                                Co-founder & Chief Instructor <br />
                                Former Officer Cadet, 84 BMA L/C</Text>
                            </Box>
                            </Stack>

                            <Stack>
                            <Box
                                height="180px"
                                width="180px"
                                m={4}
                                backgroundSize="cover"
                                display="flex"
                                flexDir="column"
                                justifyContent="end"
                                color="white"
                                // _hover={{
                                //     width: "350px",
                                //     height: "350px",
                                // }}
                            >
                                <img src={nihal}></img>
                            </Box>
                            <Box>
                                <Text align="center">
                                Mostofa Monzurul Alam <br />
                                Co-founder & Chief Instructor <br />
                                Former Officer Cadet, 82 BMA L/C
                                </Text>
                            </Box>
                            </Stack>


                        </Box>
                    </Box>
                </Container>

            </Box>
        </Box>
    );
}