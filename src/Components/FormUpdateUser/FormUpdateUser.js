import { useState, useCallback, useEffect } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
    Select,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { fetchSign, fetchUpdateUser } from "../../helper/Api/Auth/authApi";
import { useDispatch } from "react-redux";
import { isOpen } from "../../redux/slices/modalSlice";
import { getColorMode } from "../../helper/colorMode/colorMode";

import { getAllCategories } from "../../helper/Api/GetApi";
import { tokenDecode } from "../../helper/Api/token";
// import { skillsProperty } from "../../helper/utils/skillsForm";

export default function FormUpdateUser() {
    const [categories, setCategories] = useState([]);

    //form
    const [category, setCategory] = useState("");

    const getCategoriesForm = useCallback(async () => {
        setCategories(await getAllCategories());
    }, []);

    useEffect(() => {
        getCategoriesForm();
    }, [getCategoriesForm]);

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: tokenDecode().email,
            password: "",
        },
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2));
            // console.log(values);
            const response = await fetchUpdateUser(values);
            //  console.log(response);
            if (!response) {
                return dispatch(
                    isOpen({
                        title: "Impossibile modificare",
                        text: "Errore durante la modifica",
                    })
                );
            } else {
                return dispatch(
                    isOpen({
                        title: "Modificato con successo",
                        text: response.message,
                    })
                );
            }
        },
    });

    const handleShowClick = () => setShowPassword(!showPassword);
    return (
        <Box minW={{ base: "50%", md: "468px" }}>
            <form onSubmit={formik.handleSubmit}>
                <Stack
                    spacing={4}
                    p="1rem"
                    bg={() =>
                        getColorMode() ? "blackAlpha.300" : "whiteAlpha.900"
                    }
                    boxShadow="md"
                >
  
                    <FormControl>
                        <InputGroup mt={3}>
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
                        <InputGroup mt={3}>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaLock color="gray.300" />}
                            />
                            {/* <FormControl id="category">
                            <FormLabel>In che ambito lavori?</FormLabel>
                            <Select
                                variant="outline"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.length > 0
                                    ? categories.map((category) => (
                                          <option key={category.id} value={category.name}>
                                              {category.name}
                                          </option>
                                      ))
                                    : ""}
                            </Select>
                        </FormControl> */}
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />

                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleShowClick}
                                >
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
                        mt={4}
                    >
                        Modifica
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}
