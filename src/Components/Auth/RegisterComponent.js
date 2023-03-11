import React from "react";
import { useFormik } from "formik";
import {
  Text,
  Stack,
  Box,
  Button,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { fetchSign } from "../../helper/Api/Auth/authApi";
import { useDispatch } from "react-redux";
import { isOpen } from "../../redux/slices/modalSlice";
import { getColorMode } from "../../helper/colorMode/colorMode";

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      const response = await fetchSign("register", values);
      //  console.log(response);
      if (!response) {
        return dispatch(
          isOpen({
            title: "Impossibile registrare",
            text: "Errore durante la registrazione",
          })
        );
      } else {
        return dispatch(
          isOpen({ title: "Registrato con successo", text: response.message })
        );
      }
    },
  });

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Box minW={{ base: "90%", md: "468px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          spacing={4}
          p="1rem"
          bg={() => (getColorMode() ? "blackAlpha.300" : "whiteAlpha.900")}
          boxShadow="md"
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaUserAlt color="blue.300" />}
              />
              <Input
                id="name"
                type="text"
                placeholder="Nome"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<IoMailSharp color="gray.300" />}
              />
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaLock color="gray.300" />}
              />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Nascondi" : "Mostra"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text textAlign={"left"} fontSize="13px">Minimo 4 caratteri</Text>
          </FormControl>
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
          >
            Registrati
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
