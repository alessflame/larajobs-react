import React from 'react';
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     Button,
     Text
   } from '@chakra-ui/react';

   import { useDispatch, useSelector } from 'react-redux';
import { isClose } from '../../redux/slices/modalSlice';

function ModalComponent() {

  const modal= useSelector(state=>state.modal);
  const dispatch= useDispatch();
  return (
    <>
    <Modal isOpen={modal.open}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modal.value.title}</ModalHeader>
          <ModalCloseButton onClick={()=>dispatch(isClose())} />
          <ModalBody>
            <Text>{modal.value.text}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>dispatch(isClose())}>
              Chiudi
            </Button>

            {modal.value.button ? <Button variant="solid" onClick={()=>modal.value.callback()}>{modal.value.button}</Button> : ""}
          </ModalFooter>
        </ModalContent>
      </Modal></>
  )
}

export default ModalComponent