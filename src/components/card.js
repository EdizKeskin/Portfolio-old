import {
  Box,
  Image,
  Heading,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";

function Card({ item }) {
  return (
    <Box py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        backdropFilter={"blur(4px)"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} width={"fit-content"}>
          <Image src={item.image} objectFit="cover" />
        </Box>
        <Stack textAlign={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} color={"red.400"}>
            {item.title}
          </Heading>
          <Link href={item.link} target="_blank">
            <Button variant={"outline"} colorScheme="teal" mt={"4"}>
              View Code
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
export default Card;
