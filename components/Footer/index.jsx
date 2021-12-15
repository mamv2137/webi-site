import React from "react";
import { Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Flex
        p={5}
        bg="purple.800"
        w="100%"
        justifyContent="space-between"
        align="center"
        color="white"
      >
        <p className="copyrightDisclaimer">@2021 Genis NFT</p>
      </Flex>
    </>
  );
}

export default Footer;
