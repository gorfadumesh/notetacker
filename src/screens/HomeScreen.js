import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import firebase from "./../firebase";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function HomeScreen(props) {
  const [user, loading, error] = useAuthState(firebase.auth());
  return (
    <>
      {loading ? (
        <Flex align="center" mt="20%" justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            label="Loading"
          />
        </Flex>
      ) : (
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
      )}
    </>
  );
}
