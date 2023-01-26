import React from "react";
import PadmaHeruka2 from "./img/PadmaHeruka2.png";

export default function Piece48() {
  return (
    <div className="Piece48">
      <h1>Частина II </h1>
      <h2>День 16</h2>
      <h3>3.</h3>
      <div>
        <p>Не лякайся Падма-Геруку, не жахайся, не збентежуйся. </p>
        <p>Пізнай його як прояв твого ж розуму. </p>
        <p>Він – твій їдам, тому не бійся. </p>
        <p>Воістину він – Благословенний Амітабга зі своєю дружиною, </p>
        <p>то відчуй любов до нього. </p>
        <p>Пізнання й звільнення прийдуть одночасно.</p>

        <img className="img-fluid" src={PadmaHeruka2} alt="PadmaHeruka2" />
      </div>
    </div>
  );
}
