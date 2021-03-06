import React from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebase";
import "firebase/auth";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch("");
  const user = useSelector((state) => state.user);
  if (!user.isLoggedIn) {
    history.push("login");
  }
  // console.log(user.user.photoURL, "photo");

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign-out successful");

        dispatch({ type: "USER_LOGOUT", payload: "" });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Flex bg="grey" w="100%" p={3} justifyContent="space-between">
      <Box p="2">
        <Heading size="md" color="white">
          Note Tacker
        </Heading>
      </Box>

      <Box>
        <Popover>
          <PopoverTrigger>
            <Avatar name={user.user.displayName} src={user.user.photoURL} />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>{user.user.displayName}</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="blue" onClick={logOut}>
                  Log out
                </Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </Flex>
  );
}
