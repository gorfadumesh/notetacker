import React from "react";
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

export default function Header() {
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
            <Avatar bg="teal.500" />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Jon Doe</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="blue">Log out</Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </Flex>
  );
}
