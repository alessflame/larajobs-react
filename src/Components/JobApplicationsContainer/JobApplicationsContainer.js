import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import JobApplication from "../JobApplication/JobApplication";
import { Link } from "react-router-dom";

function JobApplicationsContainer({
    title,
    size,
    reduce,
    button,
    applications,
    padding,
}) {
    // console.log(applications);

    return (
        <VStack
            justifyContent={"space-around"}
            paddingY={2}
            w={"100%"}
            spacing={15}
        >
            {title ? (
                <Text fontSize={20} color={"teal"}>
                    {title}
                </Text>
            ) : (
                ""
            )}

            <Box>
                {/* <JobApplication
          size={"xs"}
          padding={2}
          title={"candidatura Php "}
          description={reduceDescription(
            "View a summary of all your customers over the last month.",
            35
          )}
        />
        <JobApplication
          size={"xs"}
          padding={2}
          title={"candidatura Php "}
          description={reduceDescription(
            "View a summary of all your customers over the last month.",
            35
          )}
        />
        <JobApplication
          size={"xs"}
          padding={2}
          title={"candidatura Php "}
          description={reduceDescription(
            "View a summary of all your customers over the last month.",
            35
          )}
        /> */}

                {applications.map((application) => (
                    <JobApplication
                         key={application.id}
                        id={application.id}
                        padding={padding}
                        reduce={reduce}
                        size={size}
                        description={application.job.description}
                        title={application.job.title}
                    />
                ))}
            </Box>

            {button ? (
                <Button
                    color={"white"}
                    bg={"teal.500"}
                    _hover={{ bg: "teal.400" }}
                >
                    <Link to="/dashboard/myapplications">
                        Vedi le tue candidature
                    </Link>
                </Button>
            ) : (
                ""
            )}
        </VStack>
    );
}

export default JobApplicationsContainer;
