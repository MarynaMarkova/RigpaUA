import React from "react";
import YabYum2 from "./img/YabYum2.png";

export default function Piece107() {
  return (
    <div className="Piece107">
      <h1>Частина III </h1>
      <h2>День 36</h2>
      <h3>2.</h3>

      <p>
        Тепер дається вказівка, як зачинити брами лона шляхом усунення
        пристрасті й злості; слухай і осягай.{" "}
      </p>
      <div className="Prayer">
        <p>Зачини брами лона й міркуй про протидію. </p>
        <p>Прийшов час, коли потрібні стійкість і чиста думка. </p>
        <p>
          Коли треба відкинути ревнощі й медитувати на Ґуру та його дружину.{" "}
        </p>
      </div>

      <img className="img-fluid" src={YabYum2} alt="YabYum2" />
    </div>
  );
}
