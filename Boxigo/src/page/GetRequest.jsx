import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Collapse,
  Fade,
} from "@chakra-ui/react";

const GetRequest = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
      maxW="lg"
      mx="auto"
      mt={10}
    >
      <Fade in>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Get Request
        </Heading>
        <Text fontSize="lg" mb={6} textAlign="center">
          View the details of your requests. Click the button below to toggle
          the request details.
        </Text>
        <Button
          colorScheme="teal"
          variant="outline"
          _hover={{ bg: "white", color: "teal.500" }}
          onClick={handleToggleDetails}
          display="block"
          mx="auto"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        <Collapse in={showDetails} animateOpacity>
          <VStack
            spacing={4}
            mt={6}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            color="gray.800"
          >
            <Text fontSize="md">
              <strong>Request ID:</strong> 123456
            </Text>
            <Text fontSize="md">
              <strong>Date:</strong> 2024-05-30
            </Text>
            <Text fontSize="md">
              <strong>Status:</strong> Pending
            </Text>
          </VStack>
        </Collapse>
      </Fade>
    </Box>
  );
};

export default GetRequest;
