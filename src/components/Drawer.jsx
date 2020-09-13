import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { useTheme } from "emotion-theming";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

// LINKS
const links = [
  { href: "/", label: "Welcome" },
  { href: "/skills", label: "Skills" },
  { href: "/career", label: "Career" },
];

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const theme = useTheme();

  return (
    <>
      {/* CLOSE */}
      <Flex bg="primary" width="50px" height="100vh" justify="center">
        <IconButton
          aria-label="Open menu"
          icon="chevron-right"
          onClick={onOpen}
          border="none"
          background="none"
          color="white"
          _hover={{ backgroundColor: "primary" }}
        />
      </Flex>

      {/* OPEN */}
      <ChakraDrawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="primary"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack spacing={6} mt={3}>
              {links.map((l) => (
                <Button
                  key={l.label}
                  as={NavLink}
                  to={l.href}
                  color="white"
                  fontWeight="bold"
                  textDecoration="none"
                  variantColor={theme.buttonVariantColor}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
