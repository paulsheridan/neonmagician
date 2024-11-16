import React from 'react';
import { Box, Flex, Heading, Image, Text, VStack, Button, Link, Input, IconButton } from '@chakra-ui/react';
import { FaYoutube, FaFacebook, FaTumblr, FaTwitter, FaTiktok } from 'react-icons/fa';

const Landing = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh">
      {/* Top Banner */}
      <Flex
        justify="center"
        align="center"
        bg="orange.100"
        py={2}
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Visit the Print Shop
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} align="start" px={8} py={16}>
        {/* Sidebar */}
        <VStack
          spacing={4}
          align="start"
          flexShrink={0}
          width={{ base: '100%', md: '200px' }}
          mb={{ base: 8, md: 0 }}
        >
          <Image
            src="https://via.placeholder.com/150"
            alt="Artist Logo"
            borderRadius="full"
            boxSize="100px"
          />
          <VStack spacing={2} align="start">
            <Link href="#" fontWeight="bold" textTransform="uppercase">
              Shop
            </Link>
            <Link href="#" fontWeight="bold" textTransform="uppercase">
              Gallery
            </Link>
            <Link href="#" fontWeight="bold" textTransform="uppercase">
              Sketchbooks
            </Link>
            <Link href="#" fontWeight="bold" textTransform="uppercase">
              About
            </Link>
            <Link href="#" fontWeight="bold" textTransform="uppercase">
              Contact
            </Link>
          </VStack>
          <Flex mt={4} gap={2}>
            <IconButton
              as="a"
              href="#"
              icon={<FaYoutube />}
              aria-label="YouTube"
              colorScheme="orange"
              size="sm"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaFacebook />}
              aria-label="Facebook"
              colorScheme="orange"
              size="sm"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTumblr />}
              aria-label="Tumblr"
              colorScheme="orange"
              size="sm"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTwitter />}
              aria-label="Twitter"
              colorScheme="orange"
              size="sm"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTiktok />}
              aria-label="TikTok"
              colorScheme="orange"
              size="sm"
            />
          </Flex>
        </VStack>

        {/* Main Content */}
        <Box flex="1" textAlign="center">
          <Box>
            <Heading as="h1" size="lg" textTransform="uppercase" mb={4}>
              The Art of Kelogsloops
            </Heading>
            <Text fontSize="md" mb={8}>
              From Sketch to Finish
            </Text>
            <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" mb={8}>
              Out Now
            </Text>
          </Box>

          <Image
            src="https://via.placeholder.com/400x500"
            alt="Book Cover"
            mx="auto"
            borderRadius="md"
            shadow="lg"
          />
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.50" py={12} textAlign="center">
        <Heading as="h3" size="md" mb={4}>
          Mailing List
        </Heading>
        <Text fontSize="sm" mb={6}>
          Sign up to receive updates on new print releases!
        </Text>
        <Flex
          as="form"
          justify="center"
          align="center"
          maxW="400px"
          mx="auto"
          gap={2}
        >
          <Input placeholder="Email Address" flex="1" />
          <Button colorScheme="orange">Sign Up</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Landing;
