import React, { useState } from "react";
import {
  Box,
  IconButton,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import photo1 from "../../assets/images/gallery/IG_10.7.2024_670468e01239c3.88526526.webp";
import photo2 from "../../assets/images/gallery/IMG_5657_1728347085.webp";
import photo3 from "../../assets/images/gallery/2024-10-07_19-10-34_1728353450.webp";
import photo4 from "../../assets/images/gallery/2024-10-07_19-10-14_1728353426.webp";
import photo5 from "../../assets/images/gallery/2024-10-07_19-09-46_1728353399.webp";
import photo6 from "../../assets/images/gallery/2024-10-07_19-09-23_1728353381.webp";
import photo7 from "../../assets/images/gallery/2024-10-07_19-08-44_1728353350.webp";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

  const visibleCount = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  };

  return (
    <Box position="relative" w="100%" py={8} px={4} overflow="hidden">
      {/* Chevron Controls */}
      <Flex justify="flex-end" mb={2}>
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={handlePrev}
          isDisabled={currentIndex === 0}
          bg="pink.400"
          color="white"
          _hover={{ bg: "pink.300" }}
          mr={2}
        />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={handleNext}
          isDisabled={currentIndex + visibleCount >= images.length}
          bg="pink.400"
          color="white"
          _hover={{ bg: "pink.300" }}
        />
      </Flex>

      {/* Carousel Images with Animation */}
      <Box
        display="flex"
        transform={`translateX(-${(100 / visibleCount) * currentIndex}%)`}
        transition="transform 0.5s ease-in-out"
        gap={4}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Carousel Image ${index + 1}`}
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
            w={`calc(100% / ${visibleCount})`}
            flexShrink="0"
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
