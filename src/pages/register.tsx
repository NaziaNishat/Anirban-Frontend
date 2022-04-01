import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../api/auth";
import { AppRouteUi } from "../config/appRoutes";
import { Colors } from "../config/colors";
import { errorToast } from "../utils/toasts";

export const RegisterPage = () => {
  // const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  // if (isAuthenticated) navigate("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [contact_number, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [preferred_force, setPreferredForce] = useState("");
  const [hsc_batch, setHSCBatch] = useState("");
  const [college, setCollege] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [guardian_contact_number, setGuardianContactNumber] = useState("");
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsLoading(true);
    try {
      const response = await Register({
        profile: {
          first_name: first_name,
          last_name: last_name,
          age: age,
          contact_number: contact_number,
          gender: gender,
          preferred_force: preferred_force,
          hsc_batch: hsc_batch,
          college: college,
          guardian_name: guardian_name,
          guardian_contact_number: guardian_contact_number,
        },

        email: email,
        password: password,
        // confirm_password: "",
      });

      console.log(response);

      if (response?.success) {
        toast({
          title: "Registered Successfully! Please login to continue!",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
        navigate(AppRouteUi.Login());
      } else
        toast({
          title: "Not Registered!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  };

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
      <Box minW="50%" p={5} background="white" borderRadius={5} shadow="md">
        <Heading as="h1" size="lg" fontWeight="regular" color={Colors.primary}>
          Create Account
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={4} key="first_name">
            <FormLabel htmlFor="first-name">First Name</FormLabel>
            <Input
              id="first-name"
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4} key="last-name">
            <FormLabel htmlFor="last-name">Last Name</FormLabel>
            <Input
              id="last-name"
              key="last-name"
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="contact">Contact Number</FormLabel>
            <Input
              id="contact"
              type="text"
              value={contact_number}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.valueAsNumber)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Input
              as={Select}
              id="gender"
              // value={gender}
              defaultValue={"DEFAULT"}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Select Gender
              </option>
              <option key="1" value="M">
                Male
              </option>
              <option key="2" value="F">
                Female
              </option>
            </Input>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="college">College Name</FormLabel>
            <Input
              id="college"
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="pforce">Preffered Force</FormLabel>
            <Input
              as={Select}
              id="pforce"
              defaultValue={"DEFAULT"}
              // value={preferred_force}
              onChange={(e) => setPreferredForce(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Select Force
              </option>
              <option key="1" value="A">
                Bangladesh Army
              </option>
              <option key="2" value="N">
                Bangladesh Navy
              </option>
              <option key="3" value="F">
                Bangladesh Air Force
              </option>
            </Input>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="h-batch">HSC Batch</FormLabel>
            <Input
              as={Select}
              id="h-batch"
              // value={hsc_batch}
              defaultValue={"DEFAULT"}
              onChange={(e) => setHSCBatch(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Select HSC Batch
              </option>
              <option key="1" value="1">
                2017
              </option>
              <option key="2" value="2">
                2018
              </option>
              <option key="3" value="3">
                2019
              </option>
              <option key="4" value="4">
                2020
              </option>
              <option key="5" value="5">
                2021
              </option>
              <option key="6" value="6">
                2022
              </option>
              <option key="7" value="7">
                2023
              </option>
              <option key="8" value="8">
                2024
              </option>
            </Input>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="g-name">Guardian's Name</FormLabel>
            <Input
              id="g-name"
              type="text"
              value={guardian_name}
              onChange={(e) => setGuardianName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="g-number">Guardian's Phone Number</FormLabel>
            <Input
              id="g-number"
              type="text"
              value={guardian_contact_number}
              onChange={(e) => setGuardianContactNumber(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {/* <FormControl mt={4}>
            <FormLabel htmlFor="c-password">Confirm Password</FormLabel>
            <Input id="c-password" type="text" />
          </FormControl> */}

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
