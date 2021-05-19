import React, { useEffect, useState } from "react";

import "./PlayerCard.css";

function PlayerCard({ firstName, era, actionImg, faceImg, logo }) {
  return (
    <div className="playerCard">
      <figure className="playerCard__card">
        <img src={logo} alt="razorback hog" className="playerCard__cardLogo" />
        <img src={actionImg} alt="player" className="playerCard__cardPlayer" />

        <figcaption>
          <div className="playerCard__figcaptionCol">
            <p style={{ color: "black", padding: 0, margin: 0 }}>#{era}</p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>{firstName}</p>
          </div>

          <div className="playerCard__figcaptionCol">
            {" "}
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              Player Score
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>{era}</p>
            {/* <p style={{ color: "black", padding: 0, margin: 0 }}>
              ERA: {era[0] ? parseFloat(era[0].era).toFixed(2) : null}
            </p> */}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default PlayerCard;
