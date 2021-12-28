import React from "react";
import { Box, Text, Image, Container } from "@chakra-ui/react";
import TeamCard from "../TeamCard";
import RoadMapBar from "../RoadMapBar";
import RoadMap from "../RoadMap";
import BackgroundWebitos from "../BackgroundWebitos";

export default function Introduction() {
  return (
    <>
      <BackgroundWebitos />
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
        <div
          style={{ marginTop: "-40px", paddingTop: "120px" }}
          id="home"
        ></div>
        <Container
          display="flex"
          justifyContent="space-evenly"
          maxWidth="95%"
          alignItems={"center"}
          flexWrap={"wrap"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
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
              src="wbitosGif.gif"
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
            boxShadow={"2xl"}
            w={{ base: "40%", md: "40%", lg: "55%" }}
            padding={"25px"}
            margin={"0.5rem"}
            flexWrap={"wrap"}
          >
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Webitos is a collection of 6969 unique lovable members generated
              with multiple accessories, naughty and cute.
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              All NFTs are listed on OpenSea at a starting price of 0.0069 ETH
              (Polygon), meaning that there are no different prices due to
              rarity, only those Rockstars Webitos that are beyond Webitosland
              are animated to commemorate pop culture numbers.
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Webitos is a project to create awareness about two great problems
              that we live in these times
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Like prostate cancer that each year takes around 350k + men, being
              the second most frequent malicious cancer (before lung cancer) in
              men worldwide, every year we have more than 1.4 million new cases,
              it is a problem but not everything is bad news, the survival rate
              with the correct treatment is very high and early detection almost
              always ends in a happy story, in the same way it is a problem that
              we can contribute to solve as a community saving a life with Art
              and Technology with NFTs and the blockchain
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Another problem that we are experiencing lately is the
              stigmatization of the virile member, where it has been given a
              negative cognotation, with disqualifying adjectives such as
              Violent, Violator, disgusting, ugly, intrusive, micro, small,
              huge, skinny, fat, etc.
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              This creates psychological complexes in many and talking about it
              always becomes an uncomfortable situation, taking some to the
              extreme of not even wanting to have sexual contact because of
              this.
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              We want to imply with this project that a PP does not represent
              the evil acts of some penis owners and that all lil D&apos;s are
              unique and beautiful in their own way. Be proud of yourself and
              love your body
            </Text>
          </Box>
        </Container>
        <Container
          paddingBlockStart="70px"
          display="flex"
          justifyContent="space-evenly"
          maxWidth="100%"
          width={{ base: "33%", md: "66%", lg: "87%" }}
          flexWrap={"wrap"}
        >
          <Text padding={"8px 16px"} fontSize={"4xl"} fontWeight={"800"}>
            Rarity of Webitos
          </Text>
          <Text padding={"8px 16px"} fontSize={"sm"}>
            Each Webito is completely unique but they are decorated in multiple
            ways, each with its mischief and beauty in the Webitos universe
          </Text>
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"0.5rem"}
            boxShadow={"2xl"}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Basic
            </Text>
            <Text
              padding={"8px 16px"}
              fontSize={"sm"}
              w={"100%"}
              maxWidth={"300px"}
            >
              Some like it simple, after all less is more! They go through life
              radiating good vibes, expressing freedom with their style, with
              confidence in themselves and their only rule is to have a good
              time.
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            margin={"0.5rem"}
            boxShadow={"2xl"}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Accesories
            </Text>
            <Text
              padding={"8px 16px"}
              fontSize={"sm"}
              w={"100%"}
              maxWidth={"300px"}
            >
              When a Webito wants to stand out he always does it in an
              extravagant way, you could be a rebel with piercings, tattoos or
              accessories that will never go out of fashion, catch the eye of
              other Webitos with your unique style
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"0.5rem"}
            boxShadow={"2xl"}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Wild
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
            padding={"10px"}
            margin={"0.5rem"}
            boxShadow={"2xl"}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Superstar
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
          display={"flex"}
          flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={{ base: "60%", md: "60%", lg: "85%" }}
          marginTop={"5%"}
          boxShadow={"2xl"}
          padding={{ base: "10rem", md: "1rem", lg: "1rem" }}
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
            <Text
              textAlign={"center"}
              fontSize={"38px"}
              marginLeft={["0", "-35%"]}
              marginTop="0"
            >
              Road Map
            </Text>
            <RoadMap />
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
          <Box
            id="team"
            textAlign="center"
            maxWidth={{ base: "50%", md: "50%", lg: "85%" }}
          >
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
            justifyContent={{
              base: "center",
              md: "center",
              lg: "space-evenly",
            }}
            maxWidth={{ base: "50%", md: "60%", lg: "85%" }}
            flexWrap={"wrap"}
            position={"relative"}
          >
            <TeamCard
              name="Compota"
              image="team1.png"
              social={[
                { name: "twitter", url: "https://twitter.com/compota89" },
              ]}
            />
            <TeamCard
              name="RockinRobert"
              image="team2.png"
              social={[
                {
                  name: "twitter",
                  url: " https://twitter.com/RockinRobertart",
                },
              ]}
            />
            <TeamCard
              name="Giildev"
              image="team3.png"
              social={[
                {
                  name: "linkedin",
                  url: " https://www.linkedin.com/in/giildev/",
                },
                { name: "twitter", url: "https://twitter.com/GiilDev" },
              ]}
            />
            <TeamCard
              name="Frozi"
              image="team4.png"
              social={[
                {
                  name: "linkedin",
                  url: " https://www.linkedin.com/in/josuadeveloper/",
                },
                {
                  name: "instagram",
                  url: "https://www.instagram.com/waramatofrozono/",
                },
              ]}
            />
            <TeamCard
              name="Mauro"
              image="team5.png"
              social={[
                { name: "twitter", url: "https://twitter.com/maudotjs" },
              ]}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
