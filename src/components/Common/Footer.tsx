import React from "react";
import { Box, Flex, Link, Icon, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

// Navigation items array
const NAV_ITEMS = [
  {
    label: "About the Artist",
    href: "about",
  },
  {
    label: "Available Designs",
    href: "designs",
  },
  {
    label: "Tattoo Portfolio",
    href: "portfolio",
  },
  {
    label: "Aftercare Instructions",
    href: "aftercare",
  },
  {
    label: "Blog & Tips",
    href: "blog",
  },
  {
    label: "Consent Form",
    href: "consent",
  },
];

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-b, #FFF508, #FF0168)"
      color="black"
      p={8}
      textAlign="center"
    >
      <Box mb={8}>
        <Image
          src="/path-to-your-logo.png"
          alt="Logo"
          mx="auto"
          boxSize="100px"
        />
      </Box>

      {/* Navigation Links */}
      <Flex justifyContent="center" gap={8} mb={8}>
        {NAV_ITEMS.map((navItem) => (
          <Link
            key={navItem.label}
            href={navItem.href}
            fontWeight="medium"
            _hover={{ textDecoration: "underline" }}
          >
            {navItem.label}
          </Link>
        ))}
      </Flex>

      <Flex justifyContent="center" gap={4}>
        <Link href="mailto:your-email@example.com" isExternal>
          <Icon as={FaEnvelope} boxSize={6} />
        </Link>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href="https://tiktok.com" isExternal>
          <Icon as={FaTiktok} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
