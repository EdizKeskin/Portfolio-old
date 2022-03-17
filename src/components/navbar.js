import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Projects",
    path: "/Projects",
  },
];

const DesktopNav = () => {
  return (
    <>
      <Stack direction={"row"} spacing={4}>
        {links.map((link) => (
          <Link key={link.name} to={link.path}>
            <Text>{link.name}</Text>
          </Link>
        ))}
      </Stack>
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack backdropFilter={"blur(2px)"} p={4} display={{ sm: "none" }}>
      <Flex
        py={2}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        flexDirection={"column"}
      >
        {links.map((link) => (
          <Link key={link.name} to={link.path}>
            <Text fontWeight={600} color="gray.200" mb="2" zIndex={1}>
              {link.name}
            </Text>
          </Link>
        ))}
      </Flex>
    </Stack>
  );
};

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box backdropFilter={"blur(2px)"} data-aos="fade-down">
      <Flex flexDirection="row" justifyContent={{base:"normal", lg:"center"}}>
        <Flex
          ml={{ base: -2 }}
          display={{ base: "flex", sm: "none" }}
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <IoClose color="white" w={5} h={20} />
              ) : (
                <GiHamburgerMenu w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "gray.900",
            }}
          />
        </Flex>
        <Flex
          color="white"
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor="gray.900"
          align={"center"}
          justifyContent="center"
        >
          <Heading as={"h1"} fontSize="xl">
            Sharpness
          </Heading>
          <Flex display={{ base: "none", sm: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;
