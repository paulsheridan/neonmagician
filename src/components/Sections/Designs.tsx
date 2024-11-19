import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ImageGallery from "../Common/ImageGallery";

export default function Designs() {
  const images = [
    "/neonmagician/src/assets/designs/Designs - 15 of 18_1724947077.png",
    "/neonmagician/src/assets/designs/Designs - 16 of 18_1724947078.png",
    "/neonmagician/src/assets/designs/Designs - 17 of 18_1724947084.png",
    "/neonmagician/src/assets/designs/Designs - 18 of 18_1724947087.png",
    "/neonmagician/src/assets/designs/Library - 1 of 17_1728401171.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 2 of 17_1728401449.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 3 of 17_1728401297.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 4 of 17_1728401459.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 5 of 17_1728401229.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 6 of 17_1728402628.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 7 of 17_1728401625.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 8 of 17_1728402310.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 9 of 17_1728402393.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 10 of 17_1728401750.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 11 of 17_1728401661.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 12 of 17_1728401710.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 13 of 17_1728402786.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 14 of 17_1728402689.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 15 of 17_1728401469.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 16 of 17_1728401577.png",
    "/neonmagician/src/assets/designs/Neon Magician Tattoo Design - 17 of 17_1728401593.png",
  ];
  return (
    <Flex direction="column" w="100%" bg="#EA346B">
      <ImageGallery images={images} />
    </Flex>
  );
}
