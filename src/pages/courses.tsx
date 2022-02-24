import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
    Container,
    Stack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Colors } from "../config/colors";
const c_1_off = require('../assets/c_1_off.jpeg')
const c_1_on = require('../assets/c_1_on.jpeg')
const c_2_off = require('../assets/c_2_off.jpeg')
const c_2_on = require('../assets/c_2_on.jpeg')
const c_3_off = require('../assets/c_3_off.jpeg')
const c_3_on = require('../assets/c_3_on.jpeg')

export const Courses = () => {
    return (
        <Box>
            <Box
                background={Colors.secondary}
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                mt={5}
            >
                <Heading
                    as="h1"
                    textAlign="center"
                    fontWeight="regular"
                    color={Colors.primary}
                    size="xl"
                    my={5}
                >
                    Our Courses
                </Heading>
            </Box>
            <Box p={5}>
                <Container maxW="container.xl" my={5}>
                    <Box>
                        {/* <Heading
                            backgroundColor={Colors.secondary}
                            size="lg"
                            p={3}
                            textAlign="center"
                            mt={2}
                        >
                            Double Room
                        </Heading> */}

                        <Box
                            display="flex"
                            flexWrap="wrap"
                            width="100%"
                            justifyContent="center"
                        >
                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px"
                              }}
                            >
                                <img src={c_2_on}></img>
                            </Box>

                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px",
                              }}
                            >
                                <img src={c_1_on}></img>
                            </Box>

                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px",
                              }}
                            >
                                <img src={c_3_on}></img>
                            </Box>
                            

                        </Box>
                    </Box>
                </Container>
                <Container maxW="container.xl" my={5}>
                    <Box>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            width="100%"
                            justifyContent="center"
                        >
                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px",
                              }}
                            >
                                <img src={c_2_off}></img>
                            </Box>

                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px",
                              }}
                            >
                                <img src={c_1_off}></img>
                            </Box>  

                            <Box
                            height="300px"
                            width="300px"
                            m={4}
                            backgroundSize="cover"
                            display="flex"
                            flexDir="column"
                            justifyContent="end"
                            color="white"
                            _hover={{
                                width: "350px",
                                height: "350px",
                              }}
                            >
                                <img src={c_3_off}></img>
                            </Box>  

                            <Container maxW="container.xl" my={5}>

                </Container> 

                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}