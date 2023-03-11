import { Stack, VStack, useColorModeValue } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";
import JobApplicationsContainer from "../../Components/JobApplicationsContainer/JobApplicationsContainer";
// import { tokenDecode } from "../../helper/Api/token";
import { getColorMode } from "../../helper/colorMode/colorMode";
import useAuth from "../../hooks/useAuth";
import { getApplications } from "../../helper/Api/GetApi";

// const applications = [
//   { job:{
//     size: "xs",
//     padding: 2,
//     title: "candidatura Php ",
//     description: reduceDescription(
//       "View a summary of all your customers over the last month.",
//       35
//     ),
//   }
//   },
//   { job:{
//     size: "xs",
//     padding: 2,
//     title: "candidatura Php ",
//     description: reduceDescription(
//       "View a summary of all your customers over the last month.",
//       35
//     ),
//   }
//   },  { job:{
//     size: "xs",
//     padding: 2,
//     title: "candidatura Php ",
//     description: reduceDescription(
//       "View a summary of all your customers over the last month.",
//       35
//     ),
//   }
//   },

// ];

function SidebarUser() {
    // const mode = () => getColorMode();
    const [token, user, isLogged] = useAuth();
    const [applications, setApplications] = useState([]);

    const getApplicationsCallback = useCallback(async () => {
        setApplications(await getApplications(3));
    }, []);
    useEffect(() => {
        getApplicationsCallback();
    }, [getApplicationsCallback]);

    return (
        <VStack
            overflowY="auto"
            borderRadius="xl"
            position="sticky"
            display="block"
            mb="2px"
            top="0"
            p={2}
            margin="10px"
            bg={useColorModeValue("gray.100","gray.900")}
        >
            <UserAvatar name={user} />
            <Stack
                height="60vh"
                max-height="60vh"
                borderRadius={10}
                boxShadow={"base"}
            >
                <JobApplicationsContainer
                    title={"Candidature recenti"}
                    button={"Vedi le tue candidature"}
                    applications={applications}
                    size={"xs"}
                    reduce={true}
                    padding={2}
                />
            </Stack>
        </VStack>
    );
}

export default SidebarUser;
