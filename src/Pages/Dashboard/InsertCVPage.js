import React from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import {
    Flex,
    useColorModeValue,
    Heading,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import CVForm from "../../Components/CVForm/CVForm";

function InsertCVPage() {
    return (
        <>
            <DashBoardLayout
                children={
                    <Flex
                        backgroundColor={useColorModeValue(
                            "white",
                            "blackAlpha.400"
                        )}
                        borderRadius={5}
                        mt={4}
                        height={"100vh"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                    >
                        <CVForm />
                        <Heading as="h3">
                            I file accettati sono .jpeg .jpg .png
                        </Heading>
                        <Alert status="info" w={"90%"} mt="20px" >
                            <AlertIcon />
                            Nota: una volta eliminati i file verranno rimossi automaticamente
                            anche nel cloud. Ti consiglio comunque di non
                            inserire immagini personali o veri CV.
                        </Alert>
                    </Flex>
                }
            />
        </>
    );
}

export default InsertCVPage;
