import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storeApplication } from "../../helper/Api/postApi";
import { useDisclosure } from "@chakra-ui/react";
import { isOpen as normalModalOpen } from "../../redux/slices/modalSlice";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

function ApplicationFormComponent({ job_title }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [letter, setLetter] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    // const modal = useSelector((state) => state.modal);
    const handleForm = () => {
        // console.log(letter);
        onOpen();
    };

    // console.log("cuao" + modal);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                return handleForm();
            }}
        >
            <FormLabel>Lettera di presentazione</FormLabel>
            <Input
                onChange={(e) => setLetter(e.target.value)}
                placeholder="Scrivi una lettera di presentazione"
            />
            <Button type="submit">Candidati</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confermi la candidatura?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Ti stai candidando per l'annuncio {job_title}
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Chiudi
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={async () => {
                                const message = await storeApplication(
                                    letter,
                                    id
                                );
                                onClose();
                                dispatch(
                                    normalModalOpen({
                                        title: "complimenti ti sei candidato!",
                                        text: message.data,
                                    })
                                );

                                return window.location.reload(true);
                            }}
                        >
                            Conferma
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </form>
    );
}

export default ApplicationFormComponent;