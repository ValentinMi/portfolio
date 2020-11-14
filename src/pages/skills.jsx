import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Spinner,
} from "@chakra-ui/core";
import { getSkills } from "../api/skills.api";
import Skill from "../components/Skill";
import { useTheme } from "emotion-theming";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  const fetchSkills = useCallback(async () => {
    setIsLoading(true);
    const data = await getSkills();
    if (data) {
      setSkills(data);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  return (
    <Flex
      direction="column"
      align="center"
      position="relative"
      h="100vh"
      overflowY="auto"
    >
      <Heading color="white">My Skills.</Heading>
      <Flex w="100%" justify="center" align="center" zIndex={1}>
        {isLoading ? (
          <Spinner color="primary" size="lg" />
        ) : (
          <Box className="Skill__board" borderRadius="10px">
            <Grid
              templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
              gap={8}
            >
              {skills.map((s) => (
                <Skill key={s.title} infos={s} />
              ))}
            </Grid>
          </Box>
        )}
      </Flex>
      <Link href="/career" my={4}>
        <Button variantColor={theme.buttonVariantColor}>My career</Button>
      </Link>
    </Flex>
  );
};

export default Skills;
