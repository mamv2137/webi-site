import React from "react";
import { Box, Text, Image, Container } from "@chakra-ui/react";
import TeamCard from "../TeamCard";
import RoadMapBar from "../RoadMapBar";
import RoadMap from "../RoadMap";

export default function Introduction() {
  return (
    <>
      <Image
        left={"-10%"}
        top="10%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="900px"
        height="auto"
        src="argolla_azul.png"
        alt="Webitos"
      />
      <Image
        right={"-15%"}
        top="1%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="700px"
        height="auto"
        src="demon_rosa.png"
        alt="Webitos"
        style={{ transform: "rotate(45deg)" }}
      />
      <Image
        right={"0"}
        top="80%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="400px"
        height="auto"
        src="shibari_azul.png"
        alt="Webitos"
        style={{ transform: "rotate(-99deg)" }}
      />
      <Image
        right={"22%"}
        top="10%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="500px"
        height="auto"
        src="shibari_azul.png"
        alt="Webitos"
        style={{ transform: "rotate(-45deg)" }}
      />
      <Image
        bottom="-160%"
        left={"0"}
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="500px"
        height="auto"
        src="shibari_azul.png"
        alt="Webitos"
        style={{ transform: "rotate(-115deg)" }}
      />
      <Image
        bottom="-160%"
        right={"0"}
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="500px"
        height="auto"
        src="cadena_rosa.png"
        alt="Webitos"
        style={{ transform: "rotate(60deg)" }}
      />
      <Image
        bottom="-100%"
        left={"0"}
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="700px"
        height="auto"
        src="anillo_rosa.png"
        alt="Webitos"
        style={{ transform: "rotate(-20deg)" }}
      />
      <Image
        bottom="-100%"
        right={"0"}
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="700px"
        height="auto"
        src="angel_azul.png"
        alt="Webitos"
        style={{ transform: "rotate(50deg)" }}
      />
      <Image
        left={"-5%"}
        bottom="-250%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="800px"
        height="auto"
        src="tattoo_rosa.png"
        alt="Webitos"
      />
      <Image
        right={"-5%"}
        bottom="-250%"
        opacity={"0.3"}
        zIndex={-2}
        position={"absolute"}
        boxSize="800px"
        height="auto"
        src="demon_azul.png"
        alt="Webitos"
        style={{ transform: "rotate(50deg)" }}
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
          width={{ base: "33%", md: "66%", lg: "87%" }}
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
              name="Robertito"
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
              name="Nayarit"
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
