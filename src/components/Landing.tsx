import Hero from "../components/Landing/Hero";
import ImageCarousel from "../components/Landing/ImageCarousel";
import InstagramFeed from "../components/Landing/InstagramFeed";
import FindUsSection from "../components/Landing/FindUsSection";
import React, { Suspense } from "react";
import { Flex } from "@chakra-ui/react";

function Landing() {
  return (
    <Flex
      direction="column"
      w="100%"
      bgGradient="linear(to-b, #5823A1, #E7346E, #60D4FA, #FEF453)"
    >
      <Hero />
      <ImageCarousel />
      <InstagramFeed />
      <FindUsSection />
    </Flex>
  );
}

export default Landing;
