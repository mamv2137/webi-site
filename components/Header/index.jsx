import React, { useState } from "react";
import { Box, Flex, Button, IconButton, Image, Text } from "@chakra-ui/react";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

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
          className="nav"
          align="center"
          justify="space-between"
          w="16%"
          display={["none", "none", "flex", "flex"]}
        >
          <Text margin="1rem">
            <a href="#home" data-hover="Home" px={3}>
              Home
            </a>
          </Text>
          <Text margin="1rem">
            <a href="#roadmap" data-hover="Roadmap" px={3}>
              Roadmap
            </a>
          </Text>
          <Text margin="1rem">
            <a href="#team" data-hover="Team" px={3}>
              Team
            </a>
          </Text>
        </Flex>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" ml={6}>
            <a target="_blank" href="" rel="noreferrer">
              <Button className="btn rounded">
                <span className="text">Open Sea</span>
              </Button>
            </a>
            <a
              target="_blank"
              href="https://discord.gg/cTaXdqFMjG"
              rel="noreferrer"
            >
              <IconButton borderRadius="50%" margin="1" icon={<BsDiscord />} />
            </a>
            <a target="_blank" href="" rel="noreferrer">
              <IconButton borderRadius="50%" margin="1" icon={<BsTwitter />} />
            </a>
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
          <Flex
            className="nav"
            align="center"
            justify="space-between"
            w="16%"
            display={["none", "none", "flex", "flex"]}
          >
            <Text margin="1rem">
              <a href="#home" data-hover="Home" px={3}>
                Home
              </a>
            </Text>
            <Text margin="1rem">
              <a href="#roadmap" data-hover="Roadmap" px={3}>
                Roadmap
              </a>
            </Text>
            <Text margin="1rem">
              <a href="#team" data-hover="Team" px={3}>
                Team
              </a>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
