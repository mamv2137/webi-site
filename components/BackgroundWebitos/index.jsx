import React from "react";
import { Image } from "@chakra-ui/react";

export default function BackgroundWebitos() {
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
    </>
  );
}
