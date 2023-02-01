import React from "react";
import manSpace from "./img/manSpace.png";

export default function Piece9() {
  return (
    <div className="Piece9">
      <h3>9</h3>
      <br />
      <div className="Prayer">
        <p>Поглянь догори на небо – </p>
        <p>не знайдеш, куди відходять думки. </p>
        <br />
        <p>Поглянь усередину в свій розум – </p>
        <p>не знайдеш, звідки приходять думки. </p>
        <br />
        <p>Твій розум – найтонша ясність </p>
        <p>без виникнення (думок). </p>
        <br />
        <p>Твоя ріґпа – це ясне світло й порожнеча, </p>
        <p>це й є дгармакая. </p>
        <br />
        <p>Це мов блискотіння сонця, </p>
        <p>що сходить у безхмарному небі. </p>
        <br />
        <p>Хоч і не має форми, </p>
        <p>та пізнається як ясність. </p>
        <br />
        <p>Розуміння чи нерозуміння цього – дуже важливо.</p>
        <br />
      </div>
      <div>
        <img className="img-fluid" src={manSpace} alt="manSpace" />
      </div>
    </div>
  );
}
