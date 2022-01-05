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
        maxWidth={["70%","95%","95%"]}
        minWidth={"1336px"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        marginTop={["55%", "35%", "35%"]}
      >
        <div
          style={{ marginTop: "-40px"}}
          id="home"
        ></div>
        <Container
          display="flex"
          justifyContent="space-evenly"
          maxWidth={["70%","95%","95%"]}
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
            <Text padding={"8px 16px"} fontSize={"medium"} position={"relative"}>
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
          >
            <Text padding={"8px 16px"} fontSize={"medium"} position={"relative"}>
              <h2>We belive in PP awerness</h2>
              Webitos is a project to create awareness about two great problems
              that we live in these times
            </Text>
            <Text padding={"8px 16px"} fontSize={"medium"}>
              Like prostate cancer that each year takes around 350k + men, being
              the second most frequent malicious cancer (before lung cancer) in
              men worldwide, every year we have more than 1.4 million new cases,
              it is a problem but not everything is bad news, the survival rate
              with the correct treatment is very high and early detection almost
              always ends in a happy story, in the same way it is a problem that
              we can contribute to solve as a community saving a life with Art
              and Technology with NFTs and the blockchain
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
          >
            <Text padding={"8px 16px"} fontSize={"medium"}>
              Another problem that we are experiencing lately is the
              stigmatization of the virile member, where it has been given a
              negative cognotation, with disqualifying adjectives such as
              Violent, Violator, disgusting, ugly, intrusive, micro, small,
              huge, skinny, fat, etc.
            </Text>
            <Text padding={"8px 16px"} fontSize={"medium"}>
              This creates psychological complexes in many and talking about it
              always becomes an uncomfortable situation, taking some to the
              extreme of not even wanting to have sexual contact because of
              this.
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={["column", 'column', 'row']}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            boxShadow={"2xl"}
            w={"95vw"}
            padding={"25px"}
            margin={"1.2rem"}
          > 
            <Text padding={"8px 16px"} fontSize={"medium"}>
              <h2>We belive in PP awerness</h2>
              We want to imply with this project that a PP does not represent
              the evil acts of some penis owners and that all lil D&apos;s are
              unique and beautiful in their own way. Be proud of yourself and
              love your body
            </Text>
            <Image
              borderRadius={"35px"}
              boxSize="280px"
              height="auto"
              src="wbitosGif.gif"
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
          maxWidth={["30%","95%","95%"]}
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
            <Text padding={"16px 40px"} fontSize={"medium"}>
              Each Webito is completely unique but they are decorated in
              multiple ways, each with its mischief and beauty in the Webitos
              universe
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"white"}
            borderRadius={"35px"}
            padding={"10px"}
            margin={"1.2rem"}
            boxShadow={"5xl"}
            width={['95vw', '95vw', ' 27vw']}
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
            <Text padding={"8px 22px"} fontSize={"medium"} w={"100%"}>
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
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={['95vw', '95vw', ' 27vw']}
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
            <Text padding={"8px 22px"} fontSize={"medium"} w={"100%"}>
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
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={['95vw', '95vw', ' 27vw']}
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
            <Text padding={"8px 22px"} fontSize={"medium"} w={"100%"}>
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
            margin={"1.2rem"}
            boxShadow={"2xl"}
            width={['95vw', '95vw', ' 27vw']}
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
            <Text padding={"8px 22px"} fontSize={"medium"} w={"100%"}>
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
          maxWidth={["70%","95%","95%"]}
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
              fontSize={"4xl"}
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
          maxWidth={["27%","95%","95%"]}
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
              fontSize={"4xl"}
              fontFamily={'Pacifico'}
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
            maxWidth={["70%","95%","95%"]}
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
