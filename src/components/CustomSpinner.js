import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function CustomSpinner() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
        color="teal"
      />
    </Flex>
  );
}

export default CustomSpinner;
