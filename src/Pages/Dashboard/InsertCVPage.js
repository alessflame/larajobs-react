import React from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import CVForm from "../../Components/CVForm/CVForm";

function InsertCVPage() {
    return (
        <>
            <DashBoardLayout
                children={
                    <Flex
                        backgroundColor={useColorModeValue("white","blackAlpha.400")}
                        borderRadius={5}
                        mt={4}
                        height={"100vh"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <CVForm />
                    </Flex>
                }
            />
        </>
    );
}

export default InsertCVPage;
