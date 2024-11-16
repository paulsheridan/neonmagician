import React from "react";
import { Box, Button, Flex, Text, Link, VStack } from "@chakra-ui/react";

const FindUsSection = () => {
  return (
    <Box py={8} px={4} bg="gray.50">
      <Flex
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on desktop
        gap={6}
        alignItems="flex-start"
      >
        {/* Google Map */}
        <Box flex="1" minH="300px" borderRadius="md" overflow="hidden" boxShadow="lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373561575758!3d-37.81720984202119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e3c7b8d1dd0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633329403284!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </Box>

        {/* Contact Info */}
        <VStack
          flex="1"
          align="flex-start"
          spacing={4}
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Find Us At
          </Text>
          <Text fontSize="lg">123 Victorian Avenue</Text>
          <Text fontSize="lg">Gotham City, VG 45678</Text>
          <Text fontSize="lg">Phone: (123) 456-7890</Text>
          <Link fontSize="lg" color="blue.500" href="mailto:info@example.com">
            Email: info@example.com
          </Link>
          <Button
            as={Link}
            href="https://www.google.com/maps/dir/?api=1&destination=123+Victorian+Avenue+Gotham+City"
            target="_blank"
            colorScheme="teal"
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
