import React from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
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
                    >
                        <ReadPdf />
                    </Flex>
                }
            />
        </>
    );
}

export default ReadCVPage;
