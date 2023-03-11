import {
    Card,
    CardBody,
    Text,
    CardFooter,
    CardHeader,
    Heading,
    ScaleFade,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { reduceDescription } from "../../helper/Wrapper/ReduceDescription";

function JobApplication({
    id,
    size,
    padding,
    title,
    description,
    reduce = false,
    button = true,
}) {
        return (
            <ScaleFade initialScale={0.7} in={true}>
                <Card marginY="3px" borderRadius={"lg"} size={size}>
                    <CardHeader>
                        <Heading size={size} marginTop={1} p={padding}>
                            {title}
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text p={padding}>
                            {reduce
                                ? reduceDescription(description, 30)
                                : description}{" "}
                        </Text>
                    </CardBody>
                    <CardFooter>
                        {button ? (
                            <Link
                                color="teal"
                                to={"/dashboard/myapplications/" + id}
                            >
                                <Text
                                    color={"teal"}
                                    fontSize={size}
                                    padding={padding / 2}
                                    marginLeft={10}
                                >
                                    Mostra
                                </Text>
                            </Link>
                        ) : (
                            ""
                        )}
                    </CardFooter>
                </Card>
            </ScaleFade>
        );
    }


export default JobApplication;
