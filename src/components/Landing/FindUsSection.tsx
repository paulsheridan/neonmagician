import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  VStack,
  Heading,
} from "@chakra-ui/react";

const FindUsSection = () => {
  return (
    <Box py={8} px={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        alignItems="flex-start"
      >
        <Box flex="1" minH="300px" borderRadius="md" boxShadow="lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.6885161421847!2d-122.48127178731781!3d48.74964657119797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a3155db2021f%3A0xac3aba8f6e1aaf26!2sNeon%20Magician%20Tattoo%20Studio!5e0!3m2!1sen!2sus!4v1731976067225!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </Box>

        <VStack flex="1" align="flex-start" spacing={0}>
          <Heading fontSize="2xl" fontWeight="bold">
            Hit us up at:
          </Heading>
          <Text fontSize="lg">Neon Magician Tattoo</Text>
          <Text fontSize="lg">103 E Holly St, Suite 523</Text>
          <Text fontSize="lg">Bellingham, Washington 98225</Text>
          <Text fontSize="lg">(360) 224-4116</Text>
          <Link
            fontSize="lg"
            color="blue.500"
            href="mailto:hello@neonmagician.com"
          >
            hello@neonmagician.com
          </Link>
          <Button
            as={Link}
            href="https://maps.app.goo.gl/9AjRZBNbhG74CXpM6"
            variant="primary"
            size="lg"
            mt={4}
          >
            Get Directions
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default FindUsSection;
