import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function Login() {
  console.log("home screen");

  return (
    <ChakraProvider resetCSS>
      <Flex justifyContent="center">
        <Box p={10}>
          <Text mb={5} fontWeight="bold" textAlign="left" fontSize="xl">
            Sign in
          </Text>
          <Input
            mb={5}
            width="100%"
            overflow="visible"
            placeholder="Email or Phon"
            size="md"
          />
          <Input mb={5} width="100%" placeholder="Password" size="md" />
          <Text>Forgot Password ?</Text>
          <Stack
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
            display="flex"
          >
            <Button
              variant="solid"
              size="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={5}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
