import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
    Select
  } from "@chakra-ui/react";
  import { useMemo, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { Colors } from "../config/colors";
  
  export const Register = () => {
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
        paddingTop="5vh"
        paddingBottom="5vh"
      >
        <Box minW='50%' p={5} background="white" borderRadius={5} shadow="md">
          <Heading as="h1" size="lg" fontWeight="regular" color={Colors.primary}>
            Create Account
          </Heading>
          <form>
            <FormControl mt={4}>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <Input
                id="first-name"
                type="text"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <Input
                id="last-name"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="contact">Contact Number</FormLabel>
              <Input
                id="contact"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="age">Age</FormLabel>
              <Input
                id="age"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Input
                as={Select}
                id="gender"
                // value={department}
                // onChange={(e) => setDepartment(e.target.value)}
              >
                {/* {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.departmentName}
                  </option>
                ))} */}
                <option key="1" value="M">Male</option>
                <option key="2" value="F">Female</option>
              </Input>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="college">College Name</FormLabel>
              <Input
                id="college"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="pforce">Preffered Force</FormLabel>
              <Input
                as={Select}
                id="pforce"
              >
                <option key="1" value="A">Bangladesh Army</option>
                <option key="2" value="N">Bangladesh Navy</option>
                <option key="2" value="F">Bangladesh Air Force</option>
              </Input>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="h-batch">HSC Batch</FormLabel>
              <Input
                as={Select}
                id="h-batch"
              >
                <option key="1" value="1">2017</option>
                <option key="2" value="2">2018</option>
                <option key="3" value="3">2019</option>
                <option key="4" value="4">2020</option>
                <option key="5" value="5">2021</option>
                <option key="6" value="6">2022</option>
                <option key="7" value="7">2023</option>
                <option key="8" value="8">2024</option>
              </Input>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="g-name">Guardian's Name</FormLabel>
              <Input
                id="g-name"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="g-number">Guardian's Phone Number</FormLabel>
              <Input
                id="g-number"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="c-password">Confirm Password</FormLabel>
              <Input
                id="c-password"
                type="text"
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
              SUBMIT
            </Button>
          </form>
        </Box>
      </Box>
    );
  };
  