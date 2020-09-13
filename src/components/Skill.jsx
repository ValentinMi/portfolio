import { Image, PseudoBox } from "@chakra-ui/core";
import { useTheme } from "emotion-theming";
import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import { getRemoteImgSrc } from "../utils/getRemoteImgSrc";

const Skill = ({ infos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const iconSrc = getRemoteImgSrc(infos.icon[0].url);

  return (
    <>
      <PseudoBox
        d="flex"
        justifyContent="center"
        alignItems="center"
        w="230px"
        h="230px"
        justifySelf="center"
        borderRadius="30px"
        bg="primary"
        boxSizing="border-box"
        cursor="pointer"
        _hover={{
          borderWidth: "4px",
          borderColor: `${theme.buttonVariantColor}.400`,
          borderStyle: "solid",
        }}
        onClick={handleOpenModal}
      >
        <Image src={iconSrc} size="200px" />
      </PseudoBox>
      <CustomModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={{
          ...infos,
          iconSrc: iconSrc,
        }}
      />
    </>
  );
};

export default Skill;
