import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";


import PlayerCard from "../PlayerCard/PlayerCard";

function ImgCarousel({ playerData }) {
  return (
    <Carousel
      style={{ backgroundColor: "#BD3039", padding: "1rem" }}
      interval={30000}
      keyboard={true}
      pause="hover"
    >
      {playerData.map((player) => (
        <Carousel.Item>
          <PlayerCard
            firstName={player.firstName}
            era={player.era}
            actionImg={player.actionImg}
            faceImg={player.faceImg}
            logo={player.logo}
          />
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <PlayerCardList playerData={playerData}/>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ImgCarousel;
