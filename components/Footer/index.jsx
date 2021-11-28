import React, { useState } from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import Link from "next/link";

function Footer(props) {
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
        <Flex justify="space-between">
          <Link href="/nowhere">Home</Link>
          <Link href="/nowhere">Marketplace</Link>
          <Link href="/nowhere">Inventory</Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
