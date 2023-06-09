import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { getCvFile } from "../../helper/Api/GetApi";
import { deleteCvFile } from "../../helper/Api/deleteApi";
import { useDispatch } from "react-redux";
import { isOpen } from "../../redux/slices/modalSlice";
import { Link } from "react-router-dom";

function ReadPdf() {
    const [cv, setCv] = useState("");
    const [load, setLoad]=useState(false);
    const dispatch = useDispatch();
    // const domain= process.env.REACT_APP_SERVER_DOMAIN_FILE;


    const deleteCV = async () => {
        setLoad(true)
        const response = await deleteCvFile();
        return(setLoad(true), setCv(""), dispatch(isOpen({ text: response.message })));
    };

    const getCv = useCallback(async () => {
        setCv(await getCvFile());
    }, []);

    useEffect(() => {
        getCv();
    }, [getCv]);

    if (cv)
        return (
            <Box
                height={"60%"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
            >
                <Heading>CV</Heading>

                <Button m={2} bg={"teal.400"}>
                    <a
                        target="_blank"
                        href={cv}
                        rel="noreferrer"
                        download
                    >
                        Visualizza
                    </a>
                </Button>

                <Button
                    m={2}
                    bg={"red.600"}
                    isLoading={load}
                    onClick={() => {
                        deleteCV(cv);
                    }}
                >
                    Elimina
                </Button>
            </Box>
        );

    return (
        <Box>
            <Heading>Nessun Cv inserito</Heading>
            <p mt={5}>
                <Link to="/dashboard/insertcv">
                    <Button mt={5} backgroundColor="teal.400">inserisci</Button>
                </Link>
            </p>
        </Box>
    );
}

export default ReadPdf;
