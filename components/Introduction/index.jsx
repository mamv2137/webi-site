/* eslint-disable react/no-unescaped-entities */
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
        maxWidth={["70%", "95%", "95%"]}
        minWidth={"1336px"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        marginTop={["55%", "35%", "35%"]}
      >
        <div style={{ marginTop: "-40px" }} id="home"></div>
        <Container
          display="flex"
          justifyContent="space-evenly"
          maxWidth={["70%", "95%", "95%"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Box
            w={"33%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            margin={"1.2rem"}
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
            w={{ base: "36%", md: "40%", lg: "55%" }}
            padding={"25px"}
            margin={"2rem"}
            flexWrap={"wrap"}
          >
            <h1>Welcome to Webitos Project</h1>
            <Text
              padding={"8px 16px"}
              fontSize={"medium"}
              position={"relative"}
            >
              Webitos is a collection of <span>6969</span> unique lovable
              members generated with multiple accessories, naughty and cute.
            </Text>
            <Text padding={"8px 16px"} fontSize={"medium"}>
              All NFTs are listed on OpenSea at a starting price of 0.0069 ETH
              (Polygon), meaning that there are no different prices due to
              rarity, only those Rockstars Webitos that are beyond Webitosland
              are animated to commemorate pop culture numbers.
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            boxShadow={"2xl"}
            w={{ base: "36%", md: "40%", lg: "45%" }}
            padding={"25px"}
            margin={"1.2rem"}
            flexWrap={"wrap"}
            h={"auto"}
          >
            <Text
              padding={"8px 32px"}
              fontSize={"medium"}
              position={"relative"}
            >
              <Text
                fontFamily={"Pacifico"}
                fontSize={"2.2rem"}
                lineHeight={1}
                marginBottom={"1.5rem"}
                color={"#bb7cee"}
              >
                We believe in PP awareness
              </Text>
              Webitos is a project that seeks to raise awareness for prostate
              cancer, each year it takes the lives of around 350k + men
              worldwide, being the second most frequent malicious cancer (before
              lung cancer), every year there is more than 1.4 million new cases,
              the survival rate with the correct treatment is very high and
              early detection almost always ends in a happy story, it is a
              problem that we can help to solve as a community spreading
              information with Art art and blockchain technology can help save
              lives!
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            boxShadow={"2xl"}
            w={{ base: "36%", md: "40%", lg: "45%" }}
            padding={"25px"}
            margin={"1.2rem"}
            flexWrap={"wrap"}
            h={"auto"}
          >
            <Text padding={"8px 32px"} fontSize={"medium"}>
              <Text
                fontFamily={"Pacifico"}
                fontSize={"2.2rem"}
                lineHeight={1}
                marginBottom={"1.5rem"}
                color={"#bb7cee"}
              >
                No toxic masculinity!
              </Text>
              We want to make a statement against the stigmatization of the
              virile member, male bodied individuals are responsible for many
              evil acts and we want to add our voice to their condemnation, our
              collection makes a showcase of a multitude of friendly lil D's
              that spread only good times and positivity. All webitos are unique
              and beautiful in their own way, we encourage you to be proud of
              yourself and love your body!!
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            boxShadow={"2xl"}
            w={"auto"}
            padding={"25px"}
            margin={"1.2rem"}
            flexWrap={["wrap", "nowrap"]}
          >
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="34.png"
              alt="Gif Webitos"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="177.png"
              alt="Gif Webitos"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="201.png"
              alt="Gif Webitos"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="390.png"
              alt="Gif Webitos"
              margin={"1rem"}
              boxShadow={"xl"}
            />
          </Box>
        </Container>
        <Container
          paddingBlockStart="70px"
          display="flex"
          justifyContent="center"
          maxWidth={["30%", "95%", "95%"]}
          flexWrap={"wrap"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            margin={"1.2rem"}
            boxShadow={"2xl"}
            marginBottom="60px"
            width="95vw"
          >
            <h1 padding={["8px", "8px 16px"]} fontSize={"4xl"}>
              Rarity of Webitos
            </h1>
            <Text padding={"16px 8px"} fontSize={"medium"}>
              Each Webito is completely unique, they are decorated in multiple
              ways, each with their own charm and beauty in the Webitos
              universe.
            </Text>
          </Box>
          <Box
            minHeight={"400px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"1.2rem"}
            boxShadow={"5xl"}
            width={["95vw", "95vw", " 27vw"]}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"4xl"}
              fontFamily={"Pacifico"}
              color={"#bb7cee"}
            >
              Basic
            </Text>
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="basic.png"
              alt="Basic"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Text padding={"8px 22px"} fontSize={"medium"}>
              Some like it simple, after all less is more! They go through life
              radiating good vibes, expressing freedom with their style, with
              confidence in themselves. Their only rule is to have a good time.
            </Text>
            <Text
              padding={"8px 22px"}
              fontFamily={"Pacifico"}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Rarity: 🍆
            </Text>
          </Box>
          <Box
            minHeight={"400px"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"20px"}
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={["95vw", "95vw", " 27vw"]}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"4xl"}
              fontFamily={"Pacifico"}
              color={"#bb7cee"}
            >
              Accesories
            </Text>
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="accesories.png"
              alt="accesories"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Text padding={"8px 22px"} fontSize={"medium"}>
              Some Webitos like to stand out in an extravagant way they build
              their unique style with piercings, tattoos, and accessories to
              catch the eye of other Webitos.
            </Text>
            <Text
              padding={"8px 22px"}
              fontFamily={"Pacifico"}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Rarity: 🍆🍆
            </Text>
          </Box>
          <Box
            minHeight={"400px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={["95vw", "95vw", " 27vw"]}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"4xl"}
              fontFamily={"Pacifico"}
              color={"#bb7cee"}
            >
              Wild
            </Text>
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="wild.png"
              alt="wild"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Text padding={"8px 22px"} fontSize={"medium"}>
              There are ambicious Webitos with big objectives, they are great
              executives in the Webitostock they wear suits by day and forget
              about modesty and taboo by night.
            </Text>
            <Text
              padding={"8px 22px"}
              fontFamily={"Pacifico"}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Rarity: 🍆🍆🍆
            </Text>
          </Box>
          <Box
            minHeight={"400px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={["95vw", "95vw", " 27vw"]}
          >
            <Text
              padding={"4px 18px"}
              alignSelf={"center"}
              fontSize={"4xl"}
              fontFamily={"Pacifico"}
              color={"#bb7cee"}
            >
              Superstar
            </Text>
            <Image
              className="webiHome"
              borderRadius={"35px"}
              boxSize="230px"
              height="auto"
              src="angel.gif"
              alt="angel"
              margin={"1rem"}
              boxShadow={"xl"}
            />
            <Text padding={"8px 22px"} fontSize={"medium"}>
              The superstar Webitos are recognized by everyone in Webitosland,
              it is impossible not to notice when they are around, they are
              unique and have exotic careers, they are seen as Angels or Demons,
              Rockstars, Spies, and more.
            </Text>
            <Text
              padding={"8px 22px"}
              fontFamily={"Pacifico"}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Rarity: 🍆🍆🍆🍆💦
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
          maxWidth={["70%", "95%", "95%"]}
          marginTop={"5%"}
          boxShadow={"2xl"}
          padding={{ base: "0 11rem", md: "1rem", lg: "1rem" }}
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
              fontSize={"5xl"}
              marginLeft={["0", "-35%"]}
              marginTop="0"
              fontFamily={"Pacifico"}
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
          maxWidth={["27%", "55%", "95%"]}
          marginTop={"5%"}
          boxShadow={"2xl"}
          marginBlockEnd={"80px"}
        >
          <Box
            id="team"
            textAlign="center"
            maxWidth={{ base: "100%", md: "50%", lg: "85%" }}
          >
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"5xl"}
              fontFamily={"Pacifico"}
            >
              Team
            </Text>
            <Text padding={"8px 16px"} fontSize={"medium"}>
              We are a group of friends from the university who have worked on
              multiple projects and now we are very involved in the entire
              blockchain ecosystem creating new products and supporting other
              communities
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
            maxWidth={["70%", "95%", "95%"]}
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
