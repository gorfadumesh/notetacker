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
  return (
    <ChakraProvider resetCSS>
      <Flex justifyContent="center" display="grid">
        <Box mt={100} p={10} width="400px" boxShadow="2xl" borderRadius={10}>
          <Text mb={5} fontWeight="bold" textAlign="left" fontSize="2xl">
            Sign in
          </Text>
          <Input
            mb={5}
            width="100%"
            overflow="visible"
            placeholder="Email or Phone"
            size="md"
          />
          <Input mb={5} width="100%" placeholder="Password" size="md" />
          <Text color="linkedin.500">Forgot Password ?</Text>
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
              m={5}
              height="50px"
              width="100%"
              colorScheme="telegram"
              borderRadius={25}
            >
              Log in
            </Button>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
