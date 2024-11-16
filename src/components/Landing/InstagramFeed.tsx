import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

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
    <Box py={8} textAlign="center">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Follow Us on Instagram
      </Text>
      <SimpleGrid
        columns={{ base: 2, lg: 6 }} // 2 columns on mobile, 6 on larger viewports
        spacing={4} // Gap between grid items
      >
        {images.map((src, index) => (
          <Box
            key={index}
            boxShadow="lg"
            borderRadius="md"
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
    </Box>
  );
};

export default InstagramFeed;
