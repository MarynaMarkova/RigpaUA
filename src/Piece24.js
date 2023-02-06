import React from "react";
import wave from "./img/wave.jpeg";

export default function Piece24() {
  return (
    <div className="Piece24">
      <h3>24</h3>
      <br />
      <p>Немає явищ, окрім тих, що виникають із розуму. </p>

      <p>Немає явищ, яким природа розуму перешкоджала би виникнути. </p>

      <p>
        Як вода в океані збирається в хвилі, так і ці явища виникають із розуму
        й, недвойствені розуму, звільняються в розумі же.
      </p>
      <br />
      <div>
        <img className="img-fluid" src={wave} alt="wave" />
      </div>
    </div>
  );
}
