import { VStack, Stack, Button } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import { Link } from "react-router-dom";
import JobApplicationsContainer from "../../Components/JobApplicationsContainer/JobApplicationsContainer";
import { getApplications } from "../../helper/Api/GetApi";

// const applications= [
//      {
//           id:1,
//           size:"xl",
//           padding:10,
//           title:"candidatura Php ",
//           description:reduceDescription(
//             "View a summary of all your customers over the last month.",
//             100)
//      },
//      {
//           id:2,
//           size:"xl",
//           padding:10,
//           title:"candidatura Php ",
//           description:reduceDescription(
//             "View a summary of all your customers over the last month.",
//             100)
//      },
//      {          id:3,

//           size:"xl",
//           padding:10,
//           title:"candidatura Php ",
//           description:reduceDescription(
//             "View a summary of all your customers over the last month.",
//             100)
//      },
//      {
//           id:4,

//           size:"xl",
//           padding:10,
//           title:"candidatura Php ",
//           description:reduceDescription(
//             "View a summary of all your customers over the last month.",
//             100)
//      },
//      {
//           id:5,

//           size:"xl",
//           padding:10,
//           title:"candidatura Php ",
//           description:reduceDescription(
//             "View a summary of all your customers over the last month.",
//             100)
//      },
// ]

function ApplicationsPage() {
    const [applications, setApplications] = useState([]);

    const getApplicationsCallback = useCallback(async () => {
        setApplications(await getApplications());
        // console.log("application",await getApplications());
    }, []);
    useEffect(() => {
        getApplicationsCallback();
    }, [getApplicationsCallback]);

    return (
        <>
            <DashBoardLayout
                children={
                    <Stack>
                        <VStack marginY={3}>
                            <Button marginY={3} bg="teal" color={"white"}>
                                <Link to="/dashboard">Torna agli annunci</Link>
                            </Button>
                            <JobApplicationsContainer
                                applications={applications ? applications : []}
                                title="Le tue candidature"
                            />
                        </VStack>
                    </Stack>
                }
            />
        </>
    );
}

export default ApplicationsPage;
