import React from "react";
import { Box, Flex, Button, Heading, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const Navbar = () => {
  return (
    <Box
      as="nav"
      className="navbar"
      bg="white"
      px={6}
      py={4}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={1}
      height="85px"
    >
      <Flex justify="space-between" align="center">
        <Heading
          as="div"
          className="navbar-heading"
          color="orange.500"
          fontSize="2xl"
        >
          Boxigo
        </Heading>
        <ButtonGroup spacing={6}>
          <MotionButton
            className="navbar-button"
            variant="link"
            color="orange.500"
            fontWeight="semibold"
            whileHover={{ color: "tomato", scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Home
          </MotionButton>
          <MotionButton
            className="navbar-button"
            variant="link"
            color="orange.500"
            fontWeight="semibold"
            whileHover={{ color: "tomato", scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
          </MotionButton>
          <MotionButton
            className="navbar-button"
            variant="link"
            color="orange.500"
            fontWeight="semibold"
            whileHover={{ color: "tomato", scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Services
          </MotionButton>
          <MotionButton
            className="navbar-button"
            variant="link"
            color="orange.500"
            fontWeight="semibold"
            whileHover={{ color: "tomato", scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
          </MotionButton>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
