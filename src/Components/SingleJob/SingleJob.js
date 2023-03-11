import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Container,
    Stack,
    Text,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Card,
    Tag,
} from "@chakra-ui/react";
import ApplicationFormComponent from "../ApplicationFormComponent/ApplicationFormComponent";
import { trasformJSONToObject } from "../../helper/utils/skillsForm";

function SingleJob({ id, title, description, user, ral, skills, maked }) {
    const [formApplication, setFormApplication] = useState(false);

    return (
        <Card mt={5}>
            <Container width={"100%"}>
                <Button marginTop={5} bg="teal" color={"white"}>
                    <Link to="/dashboard">Torna agli annunci</Link>
                </Button>
                <SimpleGrid
                    //  columns={{ base: 1, lg: 2 }}
                    //  spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}
                >
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={"header"}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                            >
                                {title}
                            </Heading>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={"column"}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue(
                                        "gray.200",
                                        "gray.600"
                                    )}
                                />
                            }
                        >
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue(
                                        "gray.500",
                                        "gray.400"
                                    )}
                                    fontSize={"2xl"}
                                    fontWeight={"300"}
                                >
                                    {user}
                                </Text>
                                <Text fontSize={"lg"}>{description}</Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: "16px", lg: "18px" }}
                                    color={useColorModeValue(
                                        "blue.500",
                                        "cyan.300"
                                    )}
                                    fontWeight={"500"}
                                    textTransform={"uppercase"}
                                    mb={"4"}
                                >
                                    Salario
                                </Text>
                                <Text
                                    color={useColorModeValue(
                                        "gray.900",
                                        "gray.400"
                                    )}
                                    fontWeight={300}
                                    fontSize={"2xl"}
                                >
                                    {ral?ral.replace(".", ",")+"€":"Ral non specificata"}
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: "16px", lg: "18px" }}
                                    color={useColorModeValue(
                                        "blue.500",
                                        "cyan.300"
                                    )}
                                    fontWeight={"500"}
                                    textTransform={"uppercase"}
                                    mb={"4"}
                                >
                                    Skills Richieste
                                </Text>

                                <List spacing={2}>
                                    {skills ? trasformJSONToObject(skills).hard.map(
                                        (skill) => {
                                            return (
                                                <ListItem>
                                                    <Text
                                                        as={"span"}
                                                        fontWeight={"bold"}
                                                    >
                                                        {skill}
                                                    </Text>
                                                </ListItem>
                                            );
                                        }
                                    ):"Skills non specificate"} 
                                </List>
                            </Box>
                        </Stack>

                        {!maked ? (
                            <Button
                                onClick={() =>
                                    setFormApplication(!formApplication)
                                }
                                rounded={"10"}
                                w={"full"}
                                mt={8}
                                size={"lg"}
                                py={"7"}
                                bg={"teal.700"}
                                textTransform={"uppercase"}
                                _hover={{
                                    transform: "translateY(2px)",
                                    boxShadow: "lg",
                                }}
                            >
                                {formApplication ? "Chiudi" : "Candidati"}
                            </Button>
                        ) : (
                            <Tag>Già candidato</Tag>
                        )}

                        {formApplication ? (
                            <ApplicationFormComponent job_title={title} />
                        ) : (
                            ""
                        )}

                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent={"center"}
                        ></Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Card>
    );
}

export default SingleJob;
