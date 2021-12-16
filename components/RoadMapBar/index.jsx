import React from 'react'
import { Box, Image } from "@chakra-ui/react";

export default function RoadMapBar() {
  return (
    <Box
    className="roadmap"
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-between"}
    flexDirection={"column"}
    boxShadow={"xl"}
  >
    <div
      className="roadmap2"
      style={{ position: "absolute", zIndex: "2" }}
    ></div>
    <Image
      zIndex={3}
      paddingBlockStart={"20px"}
      boxSize="250px"
      width="250px"
      height="auto"
      src="1.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="250px"
      width="250px"
      height="auto"
      src="2.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="250px"
      width="250px"
      height="auto"
      src="3.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="250px"
      width="250px"
      height="auto"
      src="4.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      paddingBlockEnd={"20px"}
      boxSize="250px"
      width="250px"
      height="auto"
      src="5.png"
      alt="RoadMap"
    />
  </Box>
  )
}