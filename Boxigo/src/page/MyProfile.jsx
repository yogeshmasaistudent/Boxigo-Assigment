import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

const MyProfile = () => {
  return (
    <Box
      maxW="md"
      mx="auto"
      bg="white"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mt="10"
      p="10"
    >
      <Flex alignItems="center">
        <Image
          w="24"
          h="24"
          rounded="full"
          objectFit="cover"
          mr="4"
          src="https://avatars.githubusercontent.com/u/112820027?v=4"
          alt="Profile"
        />
        <Box>
          <Heading as="h2" size="xl" fontWeight="bold" mb="2">
            Yogesh Kushawah
          </Heading>
          <Text color="gray.600">Yogesh@example.com</Text>
        </Box>
      </Flex>
      <Box mt="4">
        <Heading as="h3" size="lg" fontWeight="semibold" mb="2">
          About Me
        </Heading>
        <Text color="gray.700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
        <Heading as="h3" size="lg" fontWeight="semibold" mt="4" mb="2">
          Details
        </Heading>
        <List spacing={2} color="gray.700">
          <ListItem>Location: New York, USA</ListItem>
          <ListItem>Occupation: Software Developer</ListItem>
          <ListItem>Hobbies: Coding, Reading, Traveling</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default MyProfile;
