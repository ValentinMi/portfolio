import React from "react";
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
} from "@chakra-ui/core";

const CustomModal = ({ isOpen, onClose, data }) => {
  const { title, iconSrc, description, pro } = data;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="primary" borderRadius="10px" color="white">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Flex alignItems="center" h="100%">
              <Image src={iconSrc} size="200px" mr={3} />
            </Flex>
            <Text
              color="primary"
              bg="white"
              mt={2}
              p={2}
              borderRadius="10px"
              fontWeight="bold"
            >
              {description}
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex direction="column">
            <Text mb={2} fontWeight="bold">
              Experiences:
            </Text>
            <Flex>
              {pro && (
                <Tag mr={2} variantColor="yellow">
                  Pro
                </Tag>
              )}
              <Tag ml={2} variantColor="blue">
                Perso
              </Tag>
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
