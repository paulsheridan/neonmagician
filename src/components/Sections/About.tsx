import { Box, Text, Image, Button, Heading, Center } from "@chakra-ui/react";
import React from "react";

export default function ErinProfile() {
  return (
    <Box
      bgGradient="linear(to-b, #FF0168, #FFF508)"
      color="white"
      p={8}
      borderRadius="md"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      textAlign={{ base: "center", md: "left" }}
      gap={8}
    >
      {/* Text Section */}
      <Box flex="1">
        <Heading fontSize="3xl" fontWeight="bold" mb={4}>
          HEY! I'M ERIN.
        </Heading>
        <Text fontSize="lg" mb={4}>
          I've been tattooing since 2004, though I took a hiatus when I moved to
          Washington and started a family. A lot about the industry has changed
          in that time! I'm thrilled to be back.
        </Text>
        <Text fontSize="lg" mb={4}>
          As a part of queer and neurodivergent communities, amongst others, I
          understand there’s no one-size-fits-all approach to building an
          inclusive environment. I do my best to provide a supportive experience
          to all, and I will always honor your needs and listen to your
          feedback. If there’s anything I can do to help you feel safer and more
          comfortable, let me know! Safety and comfort are top priorities for
          me.
        </Text>
        <Text fontSize="lg" mb={4} color={"ui.neonpink"}>
          I'm sensitive and passionate, and I'm meticulous in my work. When I
          can bring myself to put time towards it, I enjoy floating in sensory
          deprivation pods, tumbling rocks, playing video games (The Legend of
          Zelda - Tears of the Kingdom is my jam rn), and making music. I'm a
          parent to two spicy little humans who take up most of my time and
          energy and heart.
        </Text>
        <Button
          bg="ui.neonpink"
          color="white"
          _hover={{ bg: "pink.700" }}
          size="lg"
        >
          Book with me!
        </Button>
      </Box>

      {/* Image Section */}
      <Box
          w="600px"
          h="600px"
          overflow="hidden"
          borderRadius="2xl"
          bg="gray.200"
        >
          <Center>
          <Image
          src="/neonmagician/src/assets/images/IMG_5584_1719291231.JPG"
          alt="Erin's portrait"
          borderRadius="md"
        />

          </Center>
      </Box>
    </Box>
  );
}
