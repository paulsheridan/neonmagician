import React from "react";
import { Box, Heading, Button, Text, VStack, Stack } from "@chakra-ui/react";
import BrainHero from "../../assets/images/brain_hero.png";

const Hero = () => {
  return (
    <Box
      w="100%"
      h="30vh" // Half the viewport height
      minH="300"
      bgImage={BrainHero}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      color="black"
      px={8}
    >
      <Stack
        spacing={0}
        zIndex="1" // Ensures content is above the overlay
        textAlign="left" // Align text to the left
      >
        <Heading size="xl" fontWeight="bold">
          Bold &
        </Heading>
        <Heading size="xl" fontWeight="bold">
          Colorful
        </Heading>
        <Heading size="xl" fontWeight="bold">
          Tattoos In
        </Heading>
        <Heading size="xl" fontWeight="bold">
          Bellingham
        </Heading>
        <Button
          as={"a"}
          size="lg"
          mt={8}
          colorScheme="pink"
          bg="ui.neonpink"
          _hover={{ bg: "pink.300" }}
          alignSelf="flex-start"
          href={"https://neonmagician.as.me/"}
        >
          Book an Appointment
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
