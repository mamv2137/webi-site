import React from "react";
import { Text, Container } from "@chakra-ui/react";

export default function index() {
  return (
    <Container marginTop={["130%", "0"]}>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">25% Sold</h3>
              <p>
                Beginning of a parallel story, in this case we will take another
                collection from the neighboring city of Webitosland and thus get
                to know the beautiful Cuquitas
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">50% Sold</h3>
              <p>
                Launch of merchandise with your Webito to be fashionable in the
                coolest way (Airdrop free merch in a contest for the carriers of
                the Webitos and a safe Airdrop for those who have the animated
                Webitos)
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">75% Sold</h3>
              <p>
                We will create a Webitosverse comic and generate content often.
                And these comics will be generated NFT per page and will be
                distributed to Webitos holders (It&apos;s free NFT: D)
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">85% Sold</h3>
              <p>
                We will fund a play to earn game (liquidity pool) and all
                Webitos holders will be in the whitelist for the token presale
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">100% Sold</h3>
              <p>
                15% of all NFT sold will be donated to a nonprofit organization
                that treats prostate cancer where everyone as a community will
                vote and agree to contribute a grain of sand
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
