import React from "react";
import { useFormik } from "formik";
import {
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
import { FaLock } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { dispatchAuthUser } from "../../redux/setData/setData";
import { getColorMode } from "../../helper/colorMode/colorMode";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowClick = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      // const response = await fetchSign("login", values);
      // if (response) {
      //   setToken(response.data);
      //   dispatch(
      //     isOpen({ title: "Autenticazione avvenuta", text: response.message })
      //   );

      //   setIsLogin(true);
      dispatch(await dispatchAuthUser(values));

      // if (!response) {
      //   //modale di errore
      //   dispatch(
      //     isOpen({
      //       title: "Errore",
      //       text: "errore nell'autenticazione, controlla le tue credenziali",
      //     })
      //   );
      //   // console.log("errore nell'autenticazione, controlla le tue credenziali");
      // }
    },
  });

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
                color="gray.300"
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
          </FormControl>
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
