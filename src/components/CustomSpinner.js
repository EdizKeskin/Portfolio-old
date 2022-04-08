import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function CustomSpinner() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
      />
    </Flex>
  );
}

export default CustomSpinner;
