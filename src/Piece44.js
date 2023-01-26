import React from "react";
import RatnaHeruka1 from "./img/RatnaHeruka1.png";

export default function Piece44() {
  return (
    <div className="Piece44">
      <h1>Частина II </h1>
      <h2>День 15</h2>
      <h3>2.</h3>
      <div>
        <p>В правій верхній руці Ратна-Герука тримає дорогоцінність, </p>
        <p>у середній – тризуб із трьома людськими головами, </p>
        <p>в нижній – палицю; </p>
        <p>в лівій верхній руці в нього дзвін, </p>
        <p>у середній – чаша з черепа, </p>
        <p>в нижній – тризуб. </p>
        <p>Його тіло обіймає його дружина Ратна-Кродгишварі, </p>
        <p>обвиває його шию правою рукою, </p>
        <p>а лівою підносить до його рота череп, повний крові.</p>

        <img className="img-fluid" src={RatnaHeruka1} alt="RatnaHeruka1" />
      </div>
    </div>
  );
}
