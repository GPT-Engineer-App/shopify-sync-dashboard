import React from "react";
import { Container, VStack, HStack, Box, Text, Badge, IconButton, Tooltip } from "@chakra-ui/react";
import { FaSync, FaExclamationTriangle, FaClock } from "react-icons/fa";

const mockData = [
  { customer: "Customer A", status: "success", errors: 0, latency: "2s" },
  { customer: "Customer B", status: "warning", errors: 3, latency: "5s" },
  { customer: "Customer C", status: "error", errors: 10, latency: "10s" },
  { customer: "Customer D", status: "success", errors: 0, latency: "1s" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "error":
      return "red";
    default:
      return "gray";
  }
};

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>
          Shopify Product Sync Dashboard
        </Text>
        {mockData.map((data, index) => (
          <HStack key={index} width="100%" p={4} borderWidth={1} borderRadius="md" bg={getStatusColor(data.status) + ".100"}>
            <Box flex="1">
              <Text fontSize="lg">{data.customer}</Text>
            </Box>
            <HStack spacing={4}>
              <Tooltip label="Sync Status" aria-label="Sync Status">
                <Badge colorScheme={getStatusColor(data.status)}>{data.status}</Badge>
              </Tooltip>
              <Tooltip label="Number of Errors" aria-label="Number of Errors">
                <HStack>
                  <FaExclamationTriangle />
                  <Text>{data.errors}</Text>
                </HStack>
              </Tooltip>
              <Tooltip label="Latency" aria-label="Latency">
                <HStack>
                  <FaClock />
                  <Text>{data.latency}</Text>
                </HStack>
              </Tooltip>
              <Tooltip label="Sync Now" aria-label="Sync Now">
                <IconButton aria-label="Sync Now" icon={<FaSync />} size="sm" />
              </Tooltip>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
