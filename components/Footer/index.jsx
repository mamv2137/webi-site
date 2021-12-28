import React from "react";
import { Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Flex
        p={5}
        bg="purple.800"
        w="100%"
        justifyContent="center"
        align="center"
        color="white"
      >
        <p className="copyrightDisclaimer">@2021 Klipp Studio</p>
      </Flex>
    </>
  );
}

export default Footer;
