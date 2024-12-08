import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ImageGallery from "../Common/ImageGallery";
import design from "../../assets/images/designs/Designs - 15 of 18_1724947077.png";
import design1 from "../../assets/images/designs/Designs - 16 of 18_1724947078.png";
import design2 from "../../assets/images/designs/Designs - 17 of 18_1724947084.png";
import design3 from "../../assets/images/designs/Designs - 18 of 18_1724947087.png";
import design4 from "../../assets/images/designs/Library - 1 of 17_1728401171.png";
import design5 from "../../assets/images/designs/Neon Magician Tattoo Design - 2 of 17_1728401449.png";
import design6 from "../../assets/images/designs/Neon Magician Tattoo Design - 3 of 17_1728401297.png";
import design7 from "../../assets/images/designs/Neon Magician Tattoo Design - 4 of 17_1728401459.png";
import design8 from "../../assets/images/designs/Neon Magician Tattoo Design - 5 of 17_1728401229.png";
import design9 from "../../assets/images/designs/Neon Magician Tattoo Design - 6 of 17_1728402628.png";
import design10 from "../../assets/images/designs/Neon Magician Tattoo Design - 7 of 17_1728401625.png";
import design11 from "../../assets/images/designs/Neon Magician Tattoo Design - 8 of 17_1728402310.png";
import design12 from "../../assets/images/designs/Neon Magician Tattoo Design - 9 of 17_1728402393.png";
import design13 from "../../assets/images/designs/Neon Magician Tattoo Design - 10 of 17_1728401750.png";
import design14 from "../../assets/images/designs/Neon Magician Tattoo Design - 11 of 17_1728401661.png";
import design15 from "../../assets/images/designs/Neon Magician Tattoo Design - 12 of 17_1728401710.png";
import design16 from "../../assets/images/designs/Neon Magician Tattoo Design - 13 of 17_1728402786.png";
import design17 from "../../assets/images/designs/Neon Magician Tattoo Design - 14 of 17_1728402689.png";
import design18 from "../../assets/images/designs/Neon Magician Tattoo Design - 15 of 17_1728401469.png";
import design19 from "../../assets/images/designs/Neon Magician Tattoo Design - 16 of 17_1728401577.png";
import design20 from "../../assets/images/designs/Neon Magician Tattoo Design - 17 of 17_1728401593.png";

export default function Designs() {
  const images = [
    design,
    design1,
    design2,
    design3,
    design4,
    design5,
    design6,
    design7,
    design8,
    design9,
    design10,
    design11,
    design12,
    design13,
    design14,
    design15,
    design16,
    design17,
    design18,
    design19,
    design20,
  ];
  return (
    <Flex direction="column" w="100%" bg="#EA346B">
      <ImageGallery images={images} />
    </Flex>
  );
}
