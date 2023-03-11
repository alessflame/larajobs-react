import { Stack } from "@chakra-ui/react";
import React from "react";
import JobCard from "../CardsJobs/JobCard";
import NotFoundSection from "../NotFoundSection/NotFoundSection";

function CardsJobsContainer({ jobs }) {
    // console.log(jobs);
    return (
        <Stack
            w="100%"
            mt={10}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
        >
            {jobs.length > 0 ? (
                jobs.map((job) => {
                    return <JobCard key={job.id} {...job} />;
                })
            ) : (
                <NotFoundSection message="nessun annuncio trovato" />
            )}
        </Stack>
    );
}

export default CardsJobsContainer;
