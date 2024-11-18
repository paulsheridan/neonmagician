import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Landing/Navbar";
import Footer from "./components/Landing/Footer";
import Hero from "./components/Landing/Hero";
import ImageCarousel from "./components/Landing/ImageCarousel";
import InstagramFeed from "./components/Landing/InstagramFeed";
import FindUsSection from "./components/Landing/FindUsSection";


function App() {
  return (
    <Flex direction="column" w="100%">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <InstagramFeed />
      <FindUsSection />
      <Footer />
    </Flex>
  );
}


export default App
