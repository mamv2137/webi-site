import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  IconButton,
  Image,
  Container,
} from "@chakra-ui/react";

export default function Introduction() {
  return (
    <>
      <Container
        fontFamily={"Raleway"}
        paddingInlineEnd={"0"}
        paddingInlineEnd={"0"}
        maxWidth={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          maxWidth={"80%"}
        >
          <Box
            w={"35%"}
            padding={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image
              boxSize="100%"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              porro vero fuga quia cum quaerat nemo ipsum rem deserunt dolor,
              facilis iste officia quis laborum aspernatur, a, esse perferendis
              exercitationem?
            </Text>
          </Box>
        </Container>
        <Container paddingBlockStart={"20"} display={"flex"} justifyContent={"center"} maxWidth={"80%"}>
          <Box>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              porro vero fuga quia cum quaerat nemo ipsum rem deserunt dolor,
              facilis iste officia quis laborum aspernatur, a, esse perferendis
              exercitationem?
            </Text>
          </Box>
          <Box>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              porro vero fuga quia cum quaerat nemo ipsum rem deserunt dolor,
              facilis iste officia quis laborum aspernatur, a, esse perferendis
              exercitationem?
            </Text>
          </Box>
          <Box>
            <Text
              padding={"8px 16px"}
              alignSelf={"start"}
              fontSize={"xx-large"}
              fontWeight={"700"}
            >
              Rarity of Webitos
            </Text>
            <Text padding={"8px 16px"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              porro vero fuga quia cum quaerat nemo ipsum rem deserunt dolor,
              facilis iste officia quis laborum aspernatur, a, esse perferendis
              exercitationem?
            </Text>
          </Box>
        </Container>
      </Container>
    </>
  );
}
