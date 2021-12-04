import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  IconButton,
  Image,
  Container,
} from "@chakra-ui/react";

export default function Introduction() {
  return (
    <>
      <Container
        fontFamily={"Raleway"}
        paddingInlineEnd={"0"}
        paddingInlineEnd={"0"}
        maxWidth={"100%"}
        minWidth={"1336px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Container
          maxWidth={"100%"}
          minWidth={"1336px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            w={"35%"}
            padding={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image
              boxSize="350px"
              height="auto"
              src="gif.png"
              alt="Gif Webitos"
              boxShadow={"xl"}
            />
          </Box>
          <Box w={"55%"} padding={"25px"}>
            <Image
              boxSize="350px"
              height="auto"
              src="logo_webitos.png"
              alt="Logo Webitos"
            />
            <Text padding={"8px 16px"} fontSize={"xx-large"} fontWeight={"900"}>
              Rarity of Webitos
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Each Webito is completely unique but they are decorated in
              multiple ways, each with its mischief and beauty in the Webitos
              universe Some like it simple, after all less is more! They go
              through life radiating good vibes, expressing freedom with their
              style, with confidence in themselves and their only rule is to
              have a good time.
            </Text>
          </Box>
        </Container>
        <Container
          paddingBlockStart={"20"}
          display={"flex"}
          justifyContent={"space-evenly"}
          maxWidth={"95%"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text
              padding={"8px 16px"}
              fontSize={"sm"}
              w={"100%"}
              maxWidth={"250px"}
            >
              When a Webito wants to stand out he always does it in an
              extravagant way, you could be a rebel with piercings, tattoos or
              accessories that will never go out of style fashion, raise catch
              the eyes eye of other Webitos with your their o use your luego de
              un . es decir: . catch the eye of other Webitos with your unique
              style
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text
              padding={"8px 16px"}
              fontSize={"sm"}
              w={"100%"}
              maxWidth={"250px"}
            >
              There are Webitos that are beyond their objectives, being great
              executives in the Webitostock by day and savage by night where
              modesty and taboo do not exist
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text
              padding={"8px 16px"}
              fontSize={"sm"}
              w={"100%"}
              maxWidth={"250px"}
            >
              The superstar Webitos are recognized by everyone in Webitosland,
              it is impossible not to notice when one of them comes out, they
              are the only Webitos that symbolize the most exotic in their own
              careers, they are seen as Angels or Demons, Rockstar Spies, Nature
              Fighters or great disco dancers
            </Text>
          </Box>
        </Container>
        <Container
          paddingBlockStart={"20"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          maxWidth={"95%"}
        >
          <Text padding={"8px 16px"} fontSize={"2xl"} w={"100%"}>
            10% - A little bit of joy for the co-founders, a.k.a to stop eating
            instant ramen noodles for a month at least
          </Text>
          <Text padding={"8px 16px"} fontSize={"2xl"} w={"100%"}>
            10% - A little bit of joy for the co-founders, a.k.a to stop eating
            instant ramen noodles for a month at least
          </Text>
          <Text padding={"8px 16px"} fontSize={"2xl"} w={"100%"}>
            10% - A little bit of joy for the co-founders, a.k.a to stop eating
            instant ramen noodles for a month at least
          </Text>
          <Text padding={"8px 16px"} fontSize={"2xl"} w={"100%"}>
            10% - A little bit of joy for the co-founders, a.k.a to stop eating
            instant ramen noodles for a month at least
          </Text>
        </Container>
      </Container>
    </>
  );
}
