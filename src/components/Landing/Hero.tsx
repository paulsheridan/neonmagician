import React from "react";
import { Box, Heading, Button, Text, VStack, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      w="100%"
      h="50vh" // Half the viewport height
      bgImage="url('https://via.placeholder.com/1920x1080')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="flex-start" // Align content to the left
      color="white"
      px={8} // Add padding for spacing
    >
      {/* Optional Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
        zIndex="0"
      />

      {/* Hero Content */}
      <Stack
        spacing={4}
        zIndex="1" // Ensures content is above the overlay
        textAlign="left" // Align text to the left
      >
        <Heading size="2xl" fontWeight="bold">
          Bold & Stunning Tattoos
        </Heading>
        <Text fontSize="lg">
          Located in Bellingham, offering vibrant, colorful tattoos designed for you.
        </Text>
        <Button
          size="lg"
          colorScheme="pink"
          bg="pink.400"
          _hover={{ bg: "pink.300" }}
          alignSelf="flex-start" // Ensures button aligns with text on the left
        >
          Book an Appointment
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
