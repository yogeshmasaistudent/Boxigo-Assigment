import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiClipboard, FiLogOut } from "react-icons/fi";

const LinkItems = [
  { name: "MY MOVES", icon: FiHome, path: "/my-moves" },
  { name: "MY PROFILE", icon: FiUser, path: "/my-profile" },
  { name: "GET QUOTE", icon: FiClipboard, path: "/get-request" },
  { name: "LOGOUT", icon: FiLogOut, path: "/logout" },
];

export default function Sidebar({ children }) {
  const { isOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true }); // Determine if it's desktop or not

  if (!isDesktop) {
    // If it's not a desktop, don't render the sidebar
    return <>{children}</>;
  }

  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent onClose={onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="tomato"
        >
          BOXIGO
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, ...rest }) => {
  return (
    <Link
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{ bg: "grey", color: "gold" }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
