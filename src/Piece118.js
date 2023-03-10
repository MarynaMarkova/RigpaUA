import React from "react";
import Cows from "./img/Cows.jpg";

export default function Piece118() {
  return (
    <div className="Piece118">
      <h1>Частина III </h1>
      <h2>День 40</h2>
      <h3>1.</h3>

      <p>
        Якщо тобі належить народитися на північному континенті, що звуть
        «Неприємний звук», ти побачиш озеро, прикрашене худобою або деревами.
      </p>
      <p>Зрозумій це як знаки переродження й не вступай туди. </p>
      <p>
        Хоча там живуть довго й володіють чеснотами, Вчення Будди не процвітає
        там, тому не вступай туди.
      </p>

      <img className="img-fluid" src={Cows} alt="Cows" />
    </div>
  );
}
