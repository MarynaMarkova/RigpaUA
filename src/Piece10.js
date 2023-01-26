import React from "react";
import division from "./img/division.jpg";

export default function Piece10() {
  return (
    <div className="Piece10">
      <h1>Частина I </h1>
      <h2>День 4</h2>
      <h3>1.</h3>
      <div>
        <p>
          О дитино шляхетного роду, коли розділені твоє тіло й розум,
          з’являється сутнісна дійсність дгармадгату, вона ясна й чиста, хоч її
          й складно розпізнати, вона світиться й блищить із жахаючою яскравістю,
          мерехтить, як міраж на весняній рівнині.
        </p>

        <p>Не бійся її та не впадай у відчай.</p>
        <p>Це природне сяйво твоєї сутнісної дійсності – так пізнай же її.</p>

        <img className="img-fluid" src={division} alt="Division" />
      </div>
    </div>
  );
}
