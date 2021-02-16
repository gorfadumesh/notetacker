import React from "react";
import { Flex, Box, Heading, Avatar } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex bg="grey" w="100%" p={3} justifyContent="space-between">
      <Box p="2">
        <Heading size="md" color="white">
          Note Tacker
        </Heading>
      </Box>

      <Box>
        <Avatar bg="teal.500" />
      </Box>
    </Flex>
  );
}
