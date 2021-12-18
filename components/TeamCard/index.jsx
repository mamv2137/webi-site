import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import { BsDiscord, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function TeamCard(teamData) {
  return (
    <>
      <Box
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
              {teamData.social.map((social, index) => {
                const SocialNetwork =
                  social.name === "twitter" ? (
                    <BsTwitter />
                  ) : social.name === "discord" ? (
                    <BsDiscord />
                  ) : social.name === "linkedin" ? (
                    <BsLinkedin />
                  ) : social.name === "instagram" ? (
                    <BsInstagram />
                  ) : null;
                return (
                  <a
                    target="_blank"
                    key={`${index}-${social.name}`}
                    href={social.url}
                    rel="noreferrer"
                  >
                    {SocialNetwork}
                  </a>
                );
              })}
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
