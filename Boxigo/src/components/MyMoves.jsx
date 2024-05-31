import React, { useEffect, useState } from 'react';
import { Accordion, Box, Button, Checkbox, Flex, Icon, Spinner, Text } from '@chakra-ui/react';
import { IoMdHome } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import { TbInfoTriangle } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import InventoryDetails from './InventoryDetails';

const MyMoves = () => {
  const [moves, setMoves] = useState([]);
  const [expandedMove, setExpandedMove] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}`)
        .then((response) => response.json())
        .then((data) => {
          setMoves(data.Customer_Estimate_Flow);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
          console.log(process.env.REACT_APP_BACKEND_URL);
  }, []);


  const handleToggle = (estimate_id) => {
    setExpandedMove(expandedMove === estimate_id ? null : estimate_id);
  };
  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner 
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='tomato'
        size='xl' />
      </Flex>
    );
  }

  return (
    <Box p="5">
      <Text fontWeight="bold" fontSize="xl" mb="4">
        My Moves
      </Text>
      {moves.map((move) => (
        <Box key={move.estimate_id} p="5" shadow="md" borderWidth="1px" mb="4">
          <Flex alignItems="center" mb="2">
            <Text fontWeight="bold" fontSize="sm">
              From:{" "}
            </Text>
            <Text fontSize="sm" ml="2">
              {move.moving_from}
            </Text>
            <div
              style={{
                color: "red",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "50%",
                padding: "8px",
                margin: "8px",
              }}
            >
              <FaArrowRightLong />
            </div>

            <Text fontWeight="bold" fontSize="sm">
              To:{" "}
            </Text>
            <Text fontSize="sm" ml="2">
              {move.moving_to}
            </Text>
            <Text fontWeight="bold" fontSize="sm" ml={8}>
              Request#:{" "}
            </Text>
            <Text color={"tomato"} ml={2}>
              {move.estimate_id}
            </Text>
          </Flex>
          <Flex display="flex">
            <Icon as={IoMdHome} size={24} color={"tomato"} />
            {/* <Text style={{display:"flex"}}>{move.property_size}</Text> */}
            {move.property_size}
            <Icon
              as={GiPathDistance}
              ml="6"
              mr="2"
              size={24}
              color={"tomato"}
            />
            <Text>{move.distance}</Text>
            <Icon as={FaCarSide} ml="6" mr="2" size={24} color={"tomato"} />
            <Text>{move.moving_on}</Text>
            <Flex alignItems="center" ml="5">
              <Icon as={TiPencil} size={24} />
              <Checkbox colorScheme="red" defaultChecked ml="8" mb="6">
                is flexible
              </Checkbox>
            </Flex>

            <Flex mb="9" ml="30">
              <Button
                color={"red"}
                colorScheme="green"
                _hover={{
                  bg: expandedMove === move.estimate_id ? "red.600" : "tomato",
                  color: "white",
                }}
                variant="outline"
                ml="2"
                onClick={() => handleToggle(move.estimate_id)}
              >
                {expandedMove === move.estimate_id
                  ? "Hide Details"
                  : "View move details"}
              </Button>
              <Button
                backgroundColor={"tomato"}
                color={"white"}
                ml="2"
                _hover={{ bg: "green", color: "white" }}
              >
                Quotes Awaiting
              </Button>
            </Flex>
          </Flex>

          <Flex mt="2" fontSize="sm" color="gray.500" alignItems="center">
            <Icon as={TbInfoTriangle} mr="2" size={24} color={"tomato"} />
            <Text fontWeight="bold">Disclaimer: </Text>
            <Text ml="2">
              Please update your move date before two days of shifting
            </Text>
          </Flex>
          {expandedMove === move.estimate_id && (
            <Box mb="4" mt={10}>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight="bold" mb="2" mt={2}>
                  Additional Information
                </Text>
                <Button
                  color="tomato"
                  borderColor="tomato"
                  variant="outline"
                  _hover={{ bg: "tomato", color: "white" }}
                >
                  Edit Additional Info
                </Button>
              </Flex>
              <Text fontSize="sm">Test Data</Text>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight="bold" mt={4}>
                  House Details
                </Text>
                <Button
                  color="tomato"
                  borderColor="tomato"
                  variant="outline"
                  mt={4}
                  _hover={{ bg: "tomato", color: "white" }}
                >
                  Edit House Details
                </Button>
              </Flex>
              <Text mt={4} color={"tomato"} fontWeight="bold">
                Existing House Details
              </Text>
              <Flex justifyContent={"space-between"} fontWeight="bold">
                <Text>Floor No. </Text>
                <Text mr={8}>Elevator Available: </Text>
                <Text mr={60}>
                  Distance from Elevator / Staircase to truck:{" "}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>{move.old_floor_no}</Text>
                <Text mr={60}>{move.old_elevator_availability}</Text>
                <Text mr={80}>{move.new_parking_distance}</Text>
              </Flex>
              <Text mt={4} color={"tomato"} fontWeight="bold">
                New House Details
              </Text>
              <Flex justifyContent={"space-between"} fontWeight="bold">
                <Text>Floor No. </Text>
                <Text mr={8}>Elevator Available: </Text>
                <Text mr={60}>
                  Distance from Elevator / Staircase to truck:{" "}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>{move.new_floor_no}</Text>
                <Text mr={60}>{move.new_elevator_availability}</Text>
                <Text mr={80}>{move.new_parking_distance}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight="bold" mb="2" mt={4}>
                  Inventory Details
                </Text>
                <Button
                  color="tomato"
                  borderColor="tomato"
                  variant="outline"
                  mt="3"
                  ml="2"
                  _hover={{ bg: "tomato", color: "white" }}
                >
                  Edit Inventory
                </Button>
              </Flex>
              <Box mt="4">
                <Accordion allowToggle>
                  {move.items.inventory.map((item) => (
                    <InventoryDetails key={item.id} data={item} />
                  ))}
                </Accordion>
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MyMoves;
