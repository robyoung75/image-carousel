
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImgCarousel from "./Components/ImgCarousel/ImgCarousel";

import logo from './images/razorbackLogoFace.png'

import briFace from "./images/brightonWhite.jpg";
import austinFace from "./images/AustinWhite.jpg";
import carsonFace from "./images/CarsonWhite.jpg";

import briAction from "./images/action shots/Brighton bat.jpg";
import austinAction from "./images/action shots/Bowen Catch.jpg";
import carsonAction from "./images/action shots/Ryker Pitch.jpg";

import { useState } from "react";

function App() {
  const [playerData, setPlayerData] = useState([
    {
      firstName: "Carson",
      actionImg: carsonAction,
      faceImg: carsonFace,
      era: 1.5,
      logo: logo,
    },

    {
      firstName: "Brighton",
      actionImg: briAction,
      faceImg: briFace,
      era: 1.5,
      logo: logo,
    },

    {
      firstName: "austin",
      actionImg: austinAction,
      faceImg: austinFace,
      era: 1.5,
      logo: logo,
    },
  ]);

  return (
    <div className="App">
      <ImgCarousel playerData={playerData}></ImgCarousel>
    </div>
  );
}

export default App;
