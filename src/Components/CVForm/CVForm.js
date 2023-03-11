import React, { useRef, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { storeCV } from "../../helper/Api/postApi";
import { useDispatch } from "react-redux";
import { isOpen } from "../../redux/slices/modalSlice";

function CVForm() {
    const [file, setFile] = useState();
    const inputRef = useRef();
    const dispatch = useDispatch();
    const handleDrag = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files);

        // return (setFile(null), dispatch(isOpen({"title":call.message})))
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        // console.log(file[0]);
        // console.log("file", file[0].name);

        const name = file[0].name.split(".");
        if (name[name.length - 1] !== "pdf") {
            return (
                setFile(null),
                dispatch(
                    isOpen({
                        title: "Errore",
                        text: "I file accettati sono solo i PDF",
                    })
                )
            );
        }

        const call = await storeCV(file[0]);

        return (setFile(null), dispatch(isOpen({ title: call.message })));
    };

    if (file)
        return (
            <Box>
                <Heading>{file[0].name}</Heading>
                <Button m={2} bg={"red.500"} onClick={() => setFile(null)}>
                    Cancella
                </Button>
                <Button m={2} bg={"teal.400"} onClick={handleUpload}>
                    Conferma
                </Button>
            </Box>
        );

    return (
        <Box
            onDragOver={handleDrag}
            onDrop={handleDrop}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            width={"250px"}
            p={8}
            height={"250px"}
            borderRadius={"50%"}
            border={"3px dotted teal"}
        >
            <Heading fontSize={22}>Trascina o inserisci il file</Heading>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files)}
                ref={inputRef}
                title="Seleziona"
            />
        </Box>
    );
}

export default CVForm;
