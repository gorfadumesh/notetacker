import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./router/Routes";

export default function App() {
  return (
    <ChakraProvider>
      <Routes></Routes>
    </ChakraProvider>
  );
}
