import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";

const ImageGallery = ({ images }) => {
  return (
    <Box p={4}>
      <SimpleGrid
        columns={{ base: 2, lg: 3 }} // 2 columns for small, 3 for large
        spacing={4} // Spacing between grid items
      >
        {images.map((src, index) => (
          <Box
            key={index}
            overflow="hidden"
            borderRadius="md" // Rounded edges
            boxShadow="sm" // Add a subtle shadow
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              objectFit="cover" // Ensures the image fills the box
              width="100%"
              height="auto"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
