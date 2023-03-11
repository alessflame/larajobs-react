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
    Text,
    Select,
    useColorModeValue,
} from "@chakra-ui/react";

import { getAllCategories } from "../../helper/Api/GetApi";
import { skillsProperty } from "../../helper/utils/skillsForm";

export default function FormJobAd() {
    const [categories, setCategories] = useState([]);

    //form
    const [category, setCategory] = useState("");

    const getCategoriesForm = useCallback(async () => {
        setCategories(await getAllCategories());
    }, []);

    useEffect(() => {
        getCategoriesForm();
    }, [getCategoriesForm]);

    return (
        <Flex
            mt={4}
            minH={"100vh"}
            align={"start"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack w={"90%"} maxW={"100%"} py={12}>
                <Stack>
                    <Heading color={"teal.400"} fontSize={"4xl"}>
                        Crea Annuncio{" "}
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}></Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="title">
                            <FormLabel>Titolo</FormLabel>
                            <Input type="text" name="title" />
                        </FormControl>

                        <FormControl id="description">
                            <FormLabel>Descrizione</FormLabel>
                            <Input type="text" />
                        </FormControl>

                        <FormControl id="category">
                            <FormLabel>Categoria</FormLabel>
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
                        </FormControl>

                        <FormControl id="description">
                            <FormLabel>RAL</FormLabel>
                            <Input type="number" />
                        </FormControl>

                        <FormControl id="description">
                            <FormLabel>SKILLS</FormLabel>
                            {category ? (
                                <select
                                    multiple
                                    style={{
                                        width: "100%",
                                        background: "transparent",
                                        overflowY: "visible",
                                        height: "100%",
                                    }}
                                >
                                    {skillsProperty(category).map((value) => (
                                        <option value={value}>{value}</option>
                                    ))}
                                </select>
                            ) : (
                                "Seleziona una categoria"
                            )}
                        </FormControl>

                        <Stack spacing={10}>
                            <Button>Conferma</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
