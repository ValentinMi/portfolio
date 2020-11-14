import { Button, Flex, Heading, Link, Text } from "@chakra-ui/core";
import React from "react";
import { getRemoteImgSrc } from "../utils/getRemoteImgSrc";

const Contact = () => {
  // const theme = useTheme();
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };

  // const postEmail = async () => {
  //   try {
  //   } catch (error) {}
  // };

  return (
    <Flex direction="column" align="center" h="100vh">
      <Heading color="white">Contact me</Heading>
      <Text color="white">Send me an email to: dev@misiaszek-valentin.com</Text>
      {/* <form onChange={handleChange}>
        <FormControl>
          <FormLabel color="white">Your name</FormLabel>
          <Input isRequired name="name" value={formValues.name} />
        </FormControl>
        <Box mt={4}>
          <FormControl color="white">
            <FormLabel>Your email</FormLabel>
            <Input
              isRequired
              type="email"
              name="email"
              value={formValues.email}
            />
          </FormControl>
        </Box>
        <Box mt={4}>
          <FormControl>
            <FormLabel color="white">Your message</FormLabel>
            <Textarea
              isRequired
              w="100%"
              name="message"
              value={formValues.message}
            />
          </FormControl>
        </Box>
        <Flex justify="center">
          <Button
            variantColor={theme.buttonVariantColor}
            mx="auto"
            mt={4}
            leftIcon="email"
            type="submit"
          >
            Send
          </Button>
        </Flex>
      </form> */}
      <Link
        href={getRemoteImgSrc("/uploads/CV_Valentin_Misiaszek_20a1343f10.pdf")}
        target="_blank"
        mt={6}
      >
        <Button leftIcon="download">Download my CV</Button>
      </Link>
    </Flex>
  );
};

export default Contact;
