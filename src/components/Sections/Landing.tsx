import Hero from "../Landing/Hero";
import ImageCarousel from "../Landing/ImageCarousel";
import InstagramFeed from "../Landing/InstagramFeed";
import FindUsSection from "../Landing/FindUsSection";
import SEO from "../Common/SEO";
import React, { Suspense } from "react";
import { Flex } from "@chakra-ui/react";

function Landing() {
  return (
    <Flex
      direction="column"
      w="100%"
      bgGradient="linear(to-b, #5823A1, #E7346E, #60D4FA, #FEF453)"
    >
      <SEO
        title="The Neon Magician: Colorful Tattoos in downtown Bellingham, WA | The Neon Magician"
        description="Clean, safe, and caring private tattoo studio between Seattle and Vancouver featuring bold art made with love by a solo artist."
        name="The Neon Magician"
        type="website"
      />
      <Hero />
      <ImageCarousel />
      <InstagramFeed />
      <FindUsSection />
    </Flex>
  );
}

export default Landing;
