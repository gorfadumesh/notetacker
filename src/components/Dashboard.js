import React from "react";
import {
  ChakraProvider,
  Flex,
  Stack,
  IconButton,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Dashboard = () => (
  <ChakraProvider resetCSS>
    <Flex
      alignItems="space-between"
      flexDirection="column"
      width="100%"
      bg="#f4f9f9"
      h="680px"
    >
      <Flex justifyContent="flex-end" m="50px">
        <Stack spacing={2} m="10px">
          <IconButton aria-label="icon" icon={<AddIcon />} size="md" />
        </Stack>
        <Stack spacing={2} m="10px">
          <IconButton aria-label="icon" icon={<CloseIcon />} size="md" />
        </Stack>
      </Flex>
      <Flex justifyContent="space-around">
        <Stack spacing={2} m="10px" bg="white">
          <Textarea />
        </Stack>
        <Stack spacing={2}>
          <Text>Video Player</Text>
        </Stack>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default Dashboard;
