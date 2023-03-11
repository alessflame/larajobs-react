import React, { useCallback, useEffect, useState } from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import JobApplication from "../../Components/JobApplication/JobApplication";
import { Button, VStack, Heading, Box, Spinner } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { deleteApplication } from "../../helper/Api/deleteApi";
import { getSingleApplication } from "../../helper/Api/GetApi";
import { useDispatch } from "react-redux";
import { isOpen } from "../../redux/slices/modalSlice";
import NotFoundSection from "../../Components/NotFoundSection/NotFoundSection";

function SingleApplicationPage() {
    const [application, setApplication] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    const findApplication = useCallback(async () => {
        setApplication(await getSingleApplication(id));
    }, [id]);
    const destroyApplication = useCallback(async () => {
        const status = await deleteApplication(id);
        dispatch(
            isOpen({
                title: status
                    ? "candidatura annullata!"
                    : "impossibile eliminare, riprova!",
            })
        );
        return window.location.reload(true);
    }, [id, dispatch]);

    useEffect(() => {
        findApplication();
    }, [findApplication]);

    return (
        <>
            <DashBoardLayout
                children={
                    <VStack mt={10}>
                        <Button marginTop={5} bg="teal" color={"white"}>
                            <Link to="/dashboard">Torna agli annunci</Link>
                        </Button>
                        {Object.entries(application).length > 0 ? (
                            <Box>
                                <JobApplication
                                    button={false}
                                    id={application.id}
                                    title={application.job.title}
                                    description={application.job.description}
                                />
                                <Heading color={"teal.500"}>
                                    Candidatura inviata:
                                    {new Date(
                                        application.created_at
                                    ).toLocaleDateString()}
                                </Heading>
                                <Button
                                    bg={"red.500"}
                                    variant="outline"
                                    onClick={() => {
                                        destroyApplication();
                                    }}
                                    mt={10}
                                >
                                    Annulla candidatura
                                </Button>
                            </Box>
                        ) : application ? (
                            <Spinner />
                        ) : (
                            <NotFoundSection message={"nessuna candidatura"} />
                        )}
                    </VStack>
                }
            />
        </>
    );
}

export default SingleApplicationPage;
