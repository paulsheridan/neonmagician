import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";

const ImageGallery = ({ images }) => {
  return (
    <Box
      padding={4}
      w="100%"
      mx="auto"
      sx={{ columnCount: [1, 2, 2, 3], columnGap: "8px" }}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          w="100%"
          borderRadius="xl"
          mb={2}
          // d="inline-block"
          src={src}
          alt="Alt"
        />
      ))}
    </Box>
  );
};

export default ImageGallery;
