import React from "react";
import BuddhaBlossom from "./img/BuddhaBlossom.jpg";

export default function Piece21() {
  return (
    <div className="Piece21">
      <h3>21</h3>
      <br />
      <p>
        Коли всі явища, що усвідомлюються розумом, виникають, але ти не
        чіпляєшся за ці видимі явища, ти – Будда.{" "}
      </p>

      <p>
        Явище само по собі ще не є помилка, чіплятись за нього – ось у чому
        помилка.{" "}
      </p>

      <p>
        Коли розпізнав у своєму розумі ці вречевлюючі думки, це й є
        самозвільнення.
      </p>
      <br />
      <div>
        <img className="img-fluid" src={BuddhaBlossom} alt="BuddhaBlossom" />
      </div>
    </div>
  );
}
