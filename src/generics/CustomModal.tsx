import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const CustomModal = ({
//   showModalButtonText,
  modalHeader,
  modalBody,
}: {
//   showModalButtonText: any;
  modalHeader: any;
  modalBody: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button colorScheme="red" size="xs" onClick={onOpen}>
        {showModalButtonText}
      </Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                alert(1);
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
