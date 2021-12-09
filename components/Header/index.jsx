import React, { useState } from "react";
import { Box, Flex, Button, IconButton, Image } from "@chakra-ui/react";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/Gi";
import { GrClose } from "react-icons/Gr";

import Link from "next/link";

function Header(props) {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <Box
        pos="fixed"
        bg="purple.600"
        w="100%"
        p={4}
        color="whiteAlpha.800"
        boxShadow="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex={5}
      >
        <Image
          boxSize="220px"
          height="auto"
          src="logo_webitos.png"
          alt="Logo Webitos"
        />
        <Flex
          align="center"
          justify="space-between"
          w="16%"
          display={["none", "none", "flex", "flex"]}
        >
          <Link href="/" px={3}>
            Home
          </Link>
          <Link href="/about" px={3}>
            About
          </Link>
          <Link href="/roadmap" px={3}>
            Roadmap
          </Link>
        </Flex>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" ml={6}>
            <Button className="btn rounded">
              <span className="text">Open Sea</span>
            </Button>
            <IconButton borderRadius="50%" margin="1" icon={<BsDiscord />} />
            <IconButton borderRadius="50%" margin="1" icon={<BsTwitter />} />
          </Box>
        </Box>
        <IconButton
          aria-label="Open Menu"
          icon={<GiHamburgerMenu />}
          mr={2}
          size="xs"
          display={["flex", "flex", "none", "none"]}
          onClick={() => setDisplay("flex")}
        />
        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton
              icon={<GrClose />}
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              onClick={() => setDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link href="/" px={3}>
              Home
            </Link>
            <Link href="/about" px={3}>
              About
            </Link>
            <Link href="/roadmap" px={3}>
              Roadmap
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
