import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ImageGallery from "../Common/ImageGallery";
import design from "../../assets/images/portfolio/2024-10-07_17-21-02_1728346873.jpg";
import design1 from "../../assets/images/portfolio/2024-10-07_17-26-20_1728347193.jpg";
import design2 from "../../assets/images/portfolio/2024-10-07_17-26-37_1728347208.jpg";
import design3 from "../../assets/images/portfolio/All Photos - 1 of 1_1728851885.png";
import design4 from "../../assets/images/portfolio/Favorites - 1 of 1_1728851660.png";
import design5 from "../../assets/images/portfolio/Insta - 1 of 2_1728852856.png";
import design6 from "../../assets/images/portfolio/Insta - 2 of 2_1728852833.png";
import design7 from "../../assets/images/portfolio/Tattoos I've Done - 1 of 40_1726192652.jpeg";
import design8 from "../../assets/images/portfolio/Tattoos I've Done - 2 of 40_1726192654.jpeg";
import design9 from "../../assets/images/portfolio/Tattoos I've Done - 3 of 40_1726192653.jpeg";
import design10 from "../../assets/images/portfolio/Tattoos I've Done - 4 of 40_1726192662.jpeg";
import design11 from "../../assets/images/portfolio/Tattoos I've Done - 5 of 40_1726192657.jpeg";
import design12 from "../../assets/images/portfolio/Tattoos I've Done - 6 of 40_1726192663.jpeg";
import design13 from "../../assets/images/portfolio/Tattoos I've Done - 7 of 40_1726192663.jpeg";
import design14 from "../../assets/images/portfolio/Tattoos I've Done - 8 of 40_1726192659.jpeg";
import design15 from "../../assets/images/portfolio/Tattoos I've Done - 9 of 40_1726192652.jpeg";
import design16 from "../../assets/images/portfolio/Tattoos I've Done - 10 of 40_1726192651.jpeg";
import design17 from "../../assets/images/portfolio/Tattoos I've Done - 11 of 40_1726192669.jpeg";
import design18 from "../../assets/images/portfolio/Tattoos I've Done - 12 of 40_1726192667.jpeg";
import design19 from "../../assets/images/portfolio/Tattoos I've Done - 13 of 40_1726192669.jpeg";
import design20 from "../../assets/images/portfolio/Tattoos I've Done - 14 of 40_1726192666.jpeg";
import design21 from "../../assets/images/portfolio/Tattoos I've Done - 16 of 40_1726192660.jpeg";
import design22 from "../../assets/images/portfolio/Tattoos I've Done - 17 of 40_1726192661.jpeg";
import design23 from "../../assets/images/portfolio/Tattoos I've Done - 18 of 40_1726192659.jpeg";
import design24 from "../../assets/images/portfolio/Tattoos I've Done - 19 of 40_1726192666.jpeg";
import design25 from "../../assets/images/portfolio/Tattoos I've Done - 22 of 40_1726192670.jpeg";
import design26 from "../../assets/images/portfolio/Tattoos I've Done - 23 of 40_1726192666.jpeg";
import design27 from "../../assets/images/portfolio/Tattoos I've Done - 24 of 40_1726192659.jpeg";
import design28 from "../../assets/images/portfolio/Tattoos I've Done - 25 of 40_1726192669.jpeg";
import design29 from "../../assets/images/portfolio/Tattoos I've Done - 30 of 40_1726192654.jpeg";
import design30 from "../../assets/images/portfolio/Tattoos I've Done - 34 of 40_1726192671.jpeg";
import design31 from "../../assets/images/portfolio/Tattoos I've Done - 35 of 40_1726192670.jpeg";
import design32 from "../../assets/images/portfolio/Tattoos I've Done - 37 of 40_1726192671.jpeg";
import design33 from "../../assets/images/portfolio/Tattoos I've Done - 39 of 40_1726192671.jpeg";

export default function Portfolio() {
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
    design21,
    design22,
    design23,
    design24,
    design25,
    design26,
    design27,
    design28,
    design29,
    design30,
    design31,
    design32,
    design33,
  ];
  return (
    <Flex direction="column" w="100%" bg="#EA346B">
      <ImageGallery images={images} />
    </Flex>
  );
}
