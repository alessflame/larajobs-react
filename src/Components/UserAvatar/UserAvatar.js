import {
    Avatar,
    Flex,
    Card,
    CardHeader,
    Box,
    Heading,
    Text,
    IconButton,
    CardBody,
    ScaleFade,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

function UserAvatar({ name }) {
    return (
        <ScaleFade initialScale={0.8} in={true}>
            <Card maxW="md">
                <CardHeader>
                    <Flex spacing="4">
                        <Flex
                            flex="1"
                            gap="4"
                            alignItems="center"
                            flexWrap="wrap"
                        >
                            <Avatar
                                name="Segun Adebayo"
                                icon={<AiOutlineUser fontSize="1.5rem" />}
                            />

                            <Box>
                                <Heading size="sm">{name}</Heading>
                                <Text
                                    color="teal.400"
                                    decoration="ActiveBorder"
                                >
                                    <Link to="/dashboard/cv" color="teal.400">
                                        Vedi il tuo CV
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>
                        {/* <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<MdNotifications />}
      /> */}
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text fontSize={20}>Benvenuto {name}!</Text>
                    {/* <Button mt={5} colorScheme='teal' size='sm'>
    Vedi le tue candidature
  </Button> */}
                </CardBody>
            </Card>
        </ScaleFade>
    );
}

export default UserAvatar;
