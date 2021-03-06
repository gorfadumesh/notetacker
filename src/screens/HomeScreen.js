import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function HomeScreen(props) {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        {props.children}
      </Flex>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Dashboard />
      </Flex>
    </>
  );
}
