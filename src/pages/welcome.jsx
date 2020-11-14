import React from "react";
import { Heading, Flex, Box, Button, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { getRemoteImgSrc } from "../utils/getRemoteImgSrc";
import { useTheme } from "emotion-theming";

const Welcome = () => {
  const theme = useTheme();

  return (
    <Flex
      h="100vh"
      w="100%"
      justify="space-around"
      align="center"
      position="relative"
    >
      <Box textAlign="center" w="50%">
        <Heading mb={0} color="primary">
          I am Misiaszek Valentin.
        </Heading>
        <Heading mt={0} color="white">
          Fullstack Web Developer.
        </Heading>
        <Link style={{ textDecoration: "none" }} to="/skills">
          <Button variantColor={theme.buttonVariantColor}>Discover me !</Button>
        </Link>
      </Box>
      <Box w="50%">
        <Image
          src={getRemoteImgSrc(
            "/uploads/Valentin_Misiaszek_removebg_preview_5e8d9a779a.png"
          )}
        />
      </Box>
    </Flex>
  );
};

export default Welcome;
