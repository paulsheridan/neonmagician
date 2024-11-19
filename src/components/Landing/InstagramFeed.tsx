import React, { useEffect, useState } from "react";
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
  const [images, setImages] = useState([]);

  // Placeholder fetch function. Replace with your API logic.
  const fetchInstagramPosts = async () => {
    try {
      // Use Instagram API to fetch images, replace this with actual API implementation
      const response = [
        "https://via.placeholder.com/160?text=Post+1",
        "https://via.placeholder.com/160?text=Post+2",
        "https://via.placeholder.com/160?text=Post+3",
      ]; // Example static data, replace with API response
      setImages(response);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  return (
    <Box py={8} textAlign="center" px={4}>
      <Flex
        align={"center"}
        direction={{ base: "column", md: "row" }} // Change to column on smaller screens
        justify={"space-between"}
        mb={4}
      >
        <Heading fontSize="2xl" fontWeight="bold" mb={{ base: 2, md: 0 }}>
          The Latest on Instagram:
        </Heading>
        <Heading
          fontSize="xl"
          fontWeight="bold"
          color={"#60D6FB"}
          textAlign={{ base: "center", md: "left" }}
        >
          @neon.magician.tattoo
        </Heading>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }} // 2 columns on mobile, 6 on larger viewports
        spacing={4} // Gap between grid items
      >
        {images.length > 0 ? (
          images.map((src, index) => (
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
          ))
        ) : (
          <Text>Loading posts...</Text>
        )}
      </SimpleGrid>
      <Button
        as={"a"}
        variant={"primary"}
        fontSize={"md"}
        fontWeight={400}
        href={"https://www.instagram.com/neon.magician.tattoo/"}
        mt={12}
        p={4}
      >
        See Full Feed
      </Button>
    </Box>
  );
};

export default InstagramFeed;
