import React from "react";
import {
    Card,
    CardBody,
    Link,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    Button,
    ButtonGroup,
    ScaleFade,
    Tag,
} from "@chakra-ui/react";
function JobCard({ id, title, description, user , ral, maked }) {
    return (
        <ScaleFade initialScale={0.6} in={true}>
            <Card width="23vw" minH="xs" maxH={"320px"} minW="xs" m={5} mt={4}>
                <CardBody>
                    {/* <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /> */}
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Text size={1}>{user}</Text>
                        <Text>{description}</Text>
                        <Text color="blue.600" fontSize="2xl">
                            {ral ?  ral.replace(".", ",")+'€' : "RAL non specificata"}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Button bg="teal.700" _hover={{ bg: "teal.400" }}>
                            <Link
                                href={"dashboard/jobs/" + id}
                                textColor={"white"}
                            >
                                Scopri di più{" "}
                            </Link>
                        </Button>
                        {!maked ? (
                            ""
                        ) : (
                            <Tag>Già candidato</Tag>
                        )}
                    </ButtonGroup>
                </CardFooter>
            </Card>{" "}
        </ScaleFade>
    );
}

export default JobCard;
