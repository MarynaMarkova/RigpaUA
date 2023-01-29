import React from "react";
import cosmos from "./img/cosmos.jpg";

export default function Piece5() {
  return (
    <div className="Piece5">
      <h3>5</h3>
      <br />
      <p>Три Тіла неподільні й повні в єдності.</p>
      <br />
      <p>
        Нетварність – шун’ята <em className="term">дгармакаї</em>.{" "}
      </p>
      <p>
        Природній блискіт шун’яти – ясність{" "}
        <em className="term">самбгоґакаї</em>.{" "}
      </p>
      <p>
        Ясність, яка не знає перешкод, – явленість{" "}
        <em className="term">нірманакаї</em>.{" "}
      </p>
      <br />
      <p>Три повні в єдності, це й є сутність.</p>

      <div>
        <img className="img-fluid" src={cosmos} alt="cosmos" />
      </div>
    </div>
  );
}