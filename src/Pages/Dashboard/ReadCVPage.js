import React from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import { Alert, AlertIcon, Flex, useColorModeValue } from "@chakra-ui/react";
import ReadPdf from "../../Components/ReadPdf/ReadPdf";

function ReadCVPage() {
    return (
        <>
            <DashBoardLayout
                children={
                    <Flex
                        mt={4}
                        borderRadius={5}
                        backgroundColor={useColorModeValue("white","blackAlpha.400")}
                        width={"100%"}
                        height={"100vh"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                    >
                        <ReadPdf />
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

export default ReadCVPage;
