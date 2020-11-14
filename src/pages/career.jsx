import {
  Flex,
  Heading,
  Icon,
  Text,
  Image,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { getExperiences } from "../api/experiences.api";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { getRemoteImgSrc } from "../utils/getRemoteImgSrc";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";

const Career = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  console.log(experiences);

  const fetchExperiences = useCallback(async () => {
    setIsLoading(true);
    const data = await getExperiences();
    if (data) {
      setExperiences(data);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  return (
    <Flex direction="column" align="center" h="100vh" overflow="auto">
      <Heading color="white">Career</Heading>
      {
        <VerticalTimeline>
          {isLoading ? (
            <Spinner color="primary" size="lg" />
          ) : (
            experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.title}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: theme.colors.primary,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${theme.colors.primary}`,
                }}
                date={
                  exp.endYear
                    ? `${exp.startYear} - ${exp.endYear}`
                    : `${exp.startYear} - Today`
                }
                iconStyle={{ background: theme.colors.primary, color: "#fff" }}
                icon={
                  exp.logo ? (
                    <Flex justify="center" align="center" h="100%">
                      <Image
                        borderRadius="50%"
                        size="100%"
                        src={getRemoteImgSrc(exp.logo.url)}
                      />
                    </Flex>
                  ) : (
                    <Icon name="edit" />
                  )
                }
              >
                <Heading className="vertical-timeline-element-title">
                  {exp.title} - {exp.job}
                </Heading>
                <Heading className="vertical-timeline-element-subtitle">
                  {exp.city}
                </Heading>
                <Text>{exp.description}</Text>
              </VerticalTimelineElement>
            ))
          )}
        </VerticalTimeline>
      }
      <Box my={5}>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <Button variantColor={theme.buttonVariantColor}>Contact me</Button>
        </NavLink>
      </Box>
    </Flex>
  );
};

export default Career;
