import React from 'react'
import { Box, Image } from "@chakra-ui/react";

export default function RoadMapBar() {
  return (
    <Box
    className="roadmap"
    display={"flex"}
    alignItems={"center"}
    justifyContent={["center", "space-between"]}
    flexDirection={["flex", "column"]}
    boxShadow={["none", "xl"]}
    flexWrap={"wrap"}
    maxWidth={["70%","95%","95%"]}
  >
    <div
      className="roadmap2"
      style={{ position: "absolute", zIndex: "2" }}
    ></div>
    <Image
      zIndex={3}
      paddingBlockStart={"20px"}
      boxSize="200px"
      width="200px"
      height="auto"
      src="1.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="200px"
      width="200px"
      height="auto"
      src="2.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="200px"
      width="200px"
      height="auto"
      src="3.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      boxSize="200px"
      width="200px"
      height="auto"
      src="4.png"
      alt="RoadMap"
    />
    <Image
      zIndex={3}
      paddingBlockEnd={"20px"}
      boxSize="200px"
      width="200px"
      height="auto"
      src="5.png"
      alt="RoadMap"
    />
  </Box>
  )
}
