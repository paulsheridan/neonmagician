import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

const InstagramFeed = () => {
  const images = [
    "https://via.placeholder.com/160?text=Post+1",
    "https://via.placeholder.com/160?text=Post+2",
    "https://via.placeholder.com/160?text=Post+3",
    "https://via.placeholder.com/160?text=Post+4",
    "https://via.placeholder.com/160?text=Post+5",
    "https://via.placeholder.com/160?text=Post+6",
    "https://via.placeholder.com/160?text=Post+7",
    "https://via.placeholder.com/160?text=Post+8",
    "https://via.placeholder.com/160?text=Post+9",
    "https://via.placeholder.com/160?text=Post+10",
    "https://via.placeholder.com/160?text=Post+11",
    "https://via.placeholder.com/160?text=Post+12",
  ];

  return (
    <Box py={8} textAlign="center" px={4}>
      <Flex align={"center"} direction={"row"} justify={"space-between"}>
        <Heading fontSize="2xl" fontWeight="bold" mb={4}>
          The Latest on Instagram:
        </Heading>
        <Heading fontSize="xl" fontWeight="bold" mb={4} color={"#60D6FB"}>
          @neon.magician.tattoo
        </Heading>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }} // 2 columns on mobile, 6 on larger viewports
        spacing={4} // Gap between grid items
      >
        {images.map((src, index) => (
          <Box
            key={index}
            boxShadow="lg"
            borderRadius="xs"
            overflow="hidden"
            aspectRatio="1" // Ensures the images are perfect squares
          >
            <Image
              src={src}
              alt={`Instagram Post ${index + 1}`}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        ))}
      </SimpleGrid>
      <Button
        as={"a"}
        variant={"primary"}
        fontSize={"md"}
        fontWeight={400}
        href={"#"}
        mt={12}
        p={4}
      >
        See Full Feed
      </Button>
    </Box>
  );
};

export default InstagramFeed;
