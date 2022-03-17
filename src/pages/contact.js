import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import validationSchema from "./validations";

function Contact() {
  const { hasCopied, onCopy } = useClipboard("edizkeskin@gmail.com");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        emailjs.send(
          "gmail",
          "content",
          values,
          process.env.REACT_APP_EMAIL_ID
        );
        console.log("SUCCESS!");
        resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent.",
          showConfirmButton: false,

          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Message could not be delivered.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  });

  return (
    <Flex align="center" justify="center" id="contact">
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            ></Heading>
            <Stack
              spacing={{ base: 4, md: 8, lg: 6 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
                data-aos="zoom-in-down"
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>
                <Tooltip
                  hasArrow
                  label="Github"
                  bg="gray.300"
                  color="black"
                  borderRadius={"md"}
                >
                  <Link href="https://github.com/EdizKeskin" target={"_blank"}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  hasArrow
                  label="Instagram"
                  bg="gray.300"
                  color="black"
                  borderRadius={"md"}
                >
                  <Link
                    href="https://www.instagram.com/sharpness_4/"
                    target={"_blank"}
                  >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsInstagram size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  hasArrow
                  label="Twitter"
                  bg="gray.300"
                  color="black"
                  borderRadius={"md"}
                >
                  <Link
                    href="https://twitter.com/sharpness_4"
                    target={"_blank"}
                  >
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
              </Stack>
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                width={{ base: "", md: "400px" }}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                data-aos="zoom-in-up"
              >
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          isInvalid={formik.touched.name && formik.errors.name}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        autoComplete="none"
                        isInvalid={
                          formik.touched.message && formik.errors.message
                        }
                        maxHeight="100px"
                        resize={"none"}
                      />
                    </FormControl>
                    <Button
                      colorScheme="blue"
                      type="submit"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      isFullWidth
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
export default Contact;
