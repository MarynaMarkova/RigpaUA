import React from "react";
import Sperm from "./img/Sperm.jpg";

export default function Piece105() {
  return (
    <div className="Piece105">
      <h1>Частина III </h1>
      <h2>День 35</h2>
      <h3>3.</h3>

      <p>
        Якщо тобі доведеться народитися самцем, ти відчуєш себе ним і відчуєш
        люту злість до батька, ревнощі й бажання – до матері.{" "}
      </p>
      <p>
        Якщо тобі доведеться народитись самицею, ти відчуєш себе нею й відчуєш
        сильну заздрість і ревнощі до матері, пристрасне бажання – до батька.{" "}
      </p>
      <p>
        Це змусить тебе вступити на шлях, що веде до лона, й ти відчуєш
        самодовліюче блаженство, коли зустрінуться сперматозоїд і яйце.
      </p>

      <img className="img-fluid" src={Sperm} alt="Sperm" />
    </div>
  );
}
