import React, { useState, useEffect } from "react";
import { SiGoogle } from "react-icons/si";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Input,
  Button,
  Stack,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { setToken } from "./../utils";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const toast = useToast();

  const logInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
        setToken(user);
        history.push("/home");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const signInWithEmail = () => {
    setEmailError("");
    setPasswordError("");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
        setToken(user);
        history.push("/home");
        // ...
        clearInputs();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  const signUpWithEmail = () => {
    setEmailError("");
    setPasswordError("");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setHasAccount(true);

        // dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
        // setToken(user);
        // ...
        clearInputs();
        toast({
          title: "Account created.",
          description: "Please sign in with your email and password. ",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email ":
            setEmailError(error.message);
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  const forgotPassword = () => {
    var auth = firebase.auth();
    var emailAddress = email;
    console.log(email);

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        toast({
          title: "Password Reset link sent to your Email",
          description: " ",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
        // Email sent.
      })
      .catch(function (error) {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);

            break;
            console.log(error);
        }
      });
  };

  return (
    <>
      <ChakraProvider resetCSS>
        <Flex
          justifyContent="center"
          display="grid"
          mt={[2, 4, 6, 8]}
          p={[2, 4, 6, 8]}
        >
          <Box p={[3, 4, 6, 8]} fontSize={["sm", "md", "lg", "xl"]}>
            Class Room
          </Box>

          <Box
            mt={[2, 4, 6, 8]}
            p={10}
            h="auto"
            width="400px"
            boxShadow={["0", "0", "lg", "xl"]}
            borderRadius={10}
          >
            {hasAccount ? (
              <Text mb={5} fontWeight="bold" textAlign="left" fontSize="2xl">
                Sign In
              </Text>
            ) : (
              <Text mb={5} fontWeight="bold" textAlign="left" fontSize="2xl">
                Sign Up
              </Text>
            )}
            <Input
              mb={5}
              width="100%"
              overflow="visible"
              placeholder="Email or Phone"
              autoFocus
              size="md"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Text color="red">{emailError} </Text>{" "}
            <InputGroup size="md">
              <Input
                mb={5}
                width="100%"
                placeholder="Password"
                size="md"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <InputRightElement>
                <p h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </p>{" "}
              </InputRightElement>
            </InputGroup>
            <Text color="red">{passwordError} </Text>
            {hasAccount ? (
              <>
                <Text
                  style={{ cursor: "pointer" }}
                  color="linkedin.500"
                  onClick={forgotPassword}
                >
                  Forgot Password ?
                </Text>
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
                    onClick={signInWithEmail}
                  >
                    Sign in
                  </Button>
                  <p>
                    Don't have an account ?
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setHasAccount(!hasAccount);
                        clearInputs();
                      }}
                    >
                      &nbsp; Sign up
                    </span>
                  </p>
                </Stack>
              </>
            ) : (
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
                  onClick={signUpWithEmail}
                >
                  Sign Up
                </Button>
                <p>
                  Have an account ?
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setHasAccount(!hasAccount);
                      clearInputs();
                    }}
                  >
                    &nbsp; Sign in
                  </span>
                </p>
              </Stack>
            )}
            <Stack
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
              display="flex"
            >
              <Button
                variant="outline"
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
                onClick={logInWithGoogle}
              >
                <SiGoogle /> &nbsp; Sign in With Google
              </Button>
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
}
