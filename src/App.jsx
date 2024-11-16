import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Landing/Navbar";
import Footer from "./components/Landing/Footer";
import Hero from "./components/Landing/Hero";
import Logo from "./assets/images/grackleblue.png";
import Pricing from "./components/Landing/Pricing";
import Landing from "./components/Landing/Landing";
import Current from "./components/Landing/Current";
import ImageCarousel from "./components/Landing/ImageCarousel";
import InstagramFeed from "./components/Landing/InstagramFeed";
import FindUsSection from "./components/Landing/FindUsSection";


function App() {
  return (
    <Flex direction="column" w="100%">
      <Navbar />
      <Hero
        title="Welcome to Tattoo"
        subtitle="It's called Grackle and it's for booking tattoos!"
        image={Logo}
        ctaText="Sign Up Now!"
        ctaLink="/signup"
      />
      <ImageCarousel />
      <InstagramFeed />
      <FindUsSection />
      <Footer />
      {/* <Landing />
      <Current /> */}
    </Flex>
  );
}


export default App
