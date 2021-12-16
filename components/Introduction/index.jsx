import React from "react";
import { Box, Text, Image, Container, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Chrono } from "react-chrono";
import TeamCard from "../TeamCard";
import BackgroundsBlobs from "../BackgroundsBlobs";
import RoadMapBar from "../RoadMapBar";

const items = [
  {
    title: "25%",
    cardTitle: "Good stuff coming!",
    cardSubtitle:
      "Beginning of a parallel story, in this case we will take another collection from the neighboring city of Webitosland and thus get to know the beautiful Cuquitas",
  },
  {
    title: "50%",
    cardTitle: "MERCH!",
    cardSubtitle:
      "Launch of merchandise with your Webito to be fashionable in the coolest way (Airdrop free merch in a contest for the carriers of the Webitos and a safe Airdrop for those who have the animated Webitos)",
  },
  {
    title: "75%",
    cardTitle: "Some cool stories!",
    cardSubtitle:
      "We will create a Webitosverse comic and generate content often. And these comics will be generated NFT per page and will be distributed to Webitos holders (It's free NFT :D)",
  },
  {
    title: "85%",
    cardTitle: "Play with your Webito",
    cardSubtitle:
      "We will fund a play to earn game (liquidity pool) and all Webitos holders will be in the whitelist for the token presale",
  },
  {
    title: "100%",
    cardTitle: "Health and Webitos",
    cardSubtitle:
      "15% of all NFT sold will be donated to a nonprofit organization that treats prostate cancer where everyone as a community will vote and agree to contribute a grain of sand",
  },
];

export default function Introduction() {
  return (
    <>
      <Image
        left={"-15%"}
        top="4%"
        opacity={"0.7"}
        zIndex={-2}
        position={"absolute"}
        boxSize="900px"
        height="auto"
        src="argolla_azul.png"
        alt="Logo Webitos"
      />
      <Image
        right={"-15%"}
        top="1%"
        opacity={"0.6"}
        zIndex={-2}
        position={"absolute"}
        boxSize="700px"
        height="auto"
        src="demon_rosa.png"
        alt="Logo Webitos"
        style={{ transform: "rotate(45deg)" }}
      />
      <Container
        fontFamily={"Raleway"}
        paddingInlineEnd={"0"}
        maxWidth={"100%"}
        minWidth={"1336px"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        marginTop={"35%"}
      >
        <div style={{ marginTop: "-40px", paddingTop: "120px" }} id="home"></div>
        <BackgroundsBlobs />
        <Container
          display="flex"
          justifyContent="space-evenly"
          maxWidth="95%"
          alignItems={"center"}
          flexWrap={"wrap"}
          flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        >
          <Box
            w={"35%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            margin={"2rem"}
          >
            <Image
              borderRadius={"35px"}
              boxSize="480px"
              height="auto"
              src="gif.png"
              alt="Gif Webitos"
              boxShadow={"xl"}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            boxShadow={"2xl"}
            w={{ base: '40%', md: '40%', lg: '55%' }}
            padding={"25px"}
            margin={"1rem"}
            flexWrap={"wrap"}
          >
            <Image
              boxSize="350px"
              height="auto"
              src="logo_webitos.png"
              alt="Logo Webitos"
            />
            <Text padding={"8px 16px"} fontSize={"4xl"} fontWeight={"800"}>
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
          paddingBlockStart="70px"
          display="flex"
          justifyContent="space-evenly"
          maxWidth="95%"
          width={{ base: '33%', md: '66%', lg: '87%' }}
          flexWrap={"wrap"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            margin={"1rem"}
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
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            margin={"1rem"}
            boxShadow={"2xl"}
          >
            <Image
              boxSize="100px"
              height="auto"
              src="head.png"
              alt="Gif Webitos"
            />
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
            margin={"1rem"}
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
        <div id="roadmap"></div>
        <Container
          backgroundColor={"rgba(255, 255, 255, 0.9);"}
          borderRadius={"50px"}
          padding={{ base: '4rem', md: '4rem', lg: '2rem' }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={{ base: '60%', md: '60%', lg: '85%' }}
          marginTop={"5%"}
          boxShadow={"2xl"}
        >
          <RoadMapBar />
          <Box
            display={"flex"}
            alignItems={"space-between"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
            padding={"15px"}
            height={"100%"}
            marginTop={"1%"}
          >
            <BackgroundsBlobs />
            <Chrono
              theme={{
                primary: "rgba(238, 143, 246, 0.8)",
                secondary: "rgb(105, 43, 219)",
              }}
              items={items}
              zIndex={-1}
              mode="VERTICAL"
              disableNavOnKey
            />
          </Box>
        </Container>
        <Container
          backgroundColor={"rgba(255, 255, 255, 1);"}
          borderRadius={"50px"}
          padding={"16px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"85%"}
          marginTop={"5%"}
          boxShadow={"2xl"}
          marginBlockEnd={"80px"}
        >
          <Box id="team" textAlign="center">
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Team
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Members info Members info Members info Members info Members info
              Members info
            </Text>
          </Box>
          <Container
            paddingBlockStart={"40px"}
            paddingBlockEnd={"40px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            maxWidth={"95%"}
            position={"relative"}
          >
            <BackgroundsBlobs />
            <TeamCard name="Andresitos" image="team1.png" />
            <TeamCard name="Robertito" image="team2.png" />
            <TeamCard name="Gilsito" image="team3.png" />
            <TeamCard name="Frozonito" image="team4.png" />
            <TeamCard name="Mauriito" image="team5.png" />
          </Container>
        </Container>
      </Container>
    </>
  );
}
