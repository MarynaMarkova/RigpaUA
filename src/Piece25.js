import React from "react";
import meditation from "./img/meditation.jpg";

export default function Piece25() {
  return (
    <div className="Piece25">
      <h3>25</h3>
      <br />
      <p>
        Які назви ні давай, які ярлики ні чіпляй, не існує нічого, єдине окрім
        розуму.{" "}
      </p>

      <p>Та ця єдиність не має ані основи, ані кореню. </p>
      <div className="Prayer">
        <p>На нього не може бути однобокого погляду. </p>
        <br />
        <p>Його не можна розглядати як дійсне, </p>

        <p>Бо воно ніде не здійснюється. </p>
        <br />
        <p>Його не можна розглядати як порожнє, </p>

        <p>Бо воно усвідомлюється й виблискує ясністю. </p>
        <br />
        <p>Його не можна розглядати як і те, й інше, </p>

        <p>Бо ясність і порожнеча неподільні. </p>
        <br />

        <p>
          <em className="term"> Сюхвилинне самоусвідомлення</em> чітко ясне.
        </p>
      </div>

      <br />
      <div>
        <img className="img-fluid" src={meditation} alt="meditation" />
      </div>
    </div>
  );
}
