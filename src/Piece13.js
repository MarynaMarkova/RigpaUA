import React from "react";
import mind from "./img/mind.jpg";

export default function Piece13() {
  return (
    <div className="Piece13">
      <h1>Частина I </h1>
      <h2>День 5</h2>
      <h3>1.</h3>
      <div>
        <p>
          О дитино шляхетного роду, чотири з половиною дні ти була без
          свідомості, тепер же ти вирушиш далі й, прокидаючись від
          непритомності, здивуєшся: «Що трапилось?».
        </p>
        <p>Так знай же – це бардо.</p>
        <p>
          Самсара зараз перекинута, й все, що ти бачиш, виникає як світло й
          образи.
        </p>

        <img className="img-fluid" src={mind} alt="mind" />
      </div>
    </div>
  );
}
