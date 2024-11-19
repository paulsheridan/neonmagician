import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={12}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
    >
      <Text>© 2024 The Neon Magician. All Rights Reserved.</Text>
    </Flex>
  );
}
