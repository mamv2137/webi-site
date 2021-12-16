import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function TeamCard(
  teamData = { name: "Nombrecito", image: "team1.png" }
) {
  return (
    <>
      <Box
        teamData={teamData}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"160px"}
        height={"160px"}
        margin="0.5rem"
        backgroundColor={"white"}
        borderRadius={"90px"}
        boxShadow={"2xl"}
        className="flipContainer"
      >
        <div className="flipInner">
          <Image
            className="flipFront"
            boxSize="180px"
            height="auto"
            src={teamData.image}
            alt="Gif Webitos"
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            className="flipBack"
          >
            <Text>{teamData.name}</Text>
            <Box display="flex">
              <a href="#discord">
                <BsDiscord />
              </a>
              <a href="#twitter">
                <BsTwitter />
              </a>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
