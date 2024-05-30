import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Logout = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    // Perform logout logic here
    toast({
      title: "Logged out.",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      textAlign="center"
      p="5"
    >
      <VStack
        spacing={6}
        bg="whiteAlpha.800"
        p="10"
        rounded="lg"
        boxShadow="lg"
      >
        <Icon as={FaSignOutAlt} w={16} h={16} color="red.500" />
        <Heading as="h2" size="2xl" mb="4" color="black">
          Logout
        </Heading>
        <Text fontSize="xl" color="black">
          Are you sure you want to logout?
        </Text>
        <Button
          onClick={handleLogout}
          colorScheme="red"
          px="6"
          py="4"
          size="lg"
          rounded="full"
          fontWeight="bold"
          _hover={{ bg: "red.600" }}
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
};

export default Logout;
