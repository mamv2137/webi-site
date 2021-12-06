import React, { useState } from "react";
import { Box, Text, Image, Container } from "@chakra-ui/react";

import img from "../../public/full_outline2.png";

export default function Introduction() {
  return (
    <>
      <Image
        left={"-15%"}
        opacity={"0.7"}
        zIndex={-2}
        position={"absolute"}
        boxSize="900px"
        height="auto"
        src="full_outline2.png"
        alt="Logo Webitos"
      />
      <Image
        right={"-15%"}
        opacity={"0.5"}
        zIndex={-2}
        position={"absolute"}
        boxSize="700px"
        height="auto"
        src="full_outline3.png"
        alt="Logo Webitos"
        style={{ transform: "rotate(45deg)" }}
      />
      <Container
        fontFamily={"Raleway"}
        paddingInlineEnd={"0"}
        paddingInlineEnd={"0"}
        maxWidth={"100%"}
        minWidth={"1336px"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        marginTop={"35%"}
      >
        <Container
          maxWidth={"100%"}
          minWidth={"1336px"}
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
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
              borderRadius={"35px"}
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            boxShadow={"2xl"}
          >
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
              maxWidth={"300px"}
            >
              When a Webito wants to stand out he always does it in an
              extravagant way, you could be a rebel with piercings, tattoos or
              accessories that will never go out of style fashion, raise catch
              the eyes eye of other Webitos with your their o use your luego de
              un . es decir: . catch the eye of other Webitos with your unique
              style
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            boxShadow={"2xl"}
          >
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
              maxWidth={"300px"}
            >
              There are Webitos that are beyond their objectives, being great
              executives in the Webitostock by day and savage by night where
              modesty and taboo do not exist
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            boxShadow={"2xl"}
          >
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
              maxWidth={"300px"}
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
          backgroundColor={"white"}
          borderRadius={"32px"}
          padding={"16px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"85%"}
          marginTop={"5%"}
          boxShadow={"2xl"}
        >
          <Box
            className="roadmap"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            padding={"8px"}
            boxShadow={"xl"}
          > 
            <div className="roadmap2" style={{position: "absolute", zIndex: "2"}}></div>
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
            <Image zIndex={3} boxSize="150px" height="auto" src="head.png" alt="RoadMap" />
          </Box>
          <Box
            display={"flex"}
            alignItems={"space-between"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
            padding={"15px"}
            height={"700px"}
            marginTop={"1%"}
          >
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              A little bit of joy for the co-founders, a.k.a to stop
              eating instant ramen noodles for a month at least
            </Text>
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              Beginning of a parallel story, in this case we will take
              another collection from the neighboring city of Webitosland and
              thus get to know the beautiful Cuquitas
            </Text>
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              Launch of merchandise with your Webito to be fashionable in
              the coolest way (Airdrop free merch in a contest for the carriers
              of the Webitos and a safe Airdrop for those who have the animated
              Webitos)
            </Text>
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              We will create a Webitosverse comic and generate content
              often. And these comics will be generated NFT per page and will be
              distributed to Webitos holders (It's free NFT: D)
            </Text>
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              We will fund a play to earn game (liquidity pool) and all
              Webitos holders will be in the whitelist for the token presale
            </Text>
            <Text padding={"8px 16px"} fontSize={"lg"} w={"100%"}>
              15% of all NFT sold will be donated to a nonprofit
              organization that treats prostate cancer where everyone as a
              community will vote and agree to contribute a grain of sand
            </Text>
          </Box>
        </Container>
      </Container>
    </>
  );
}
