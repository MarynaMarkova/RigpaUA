import React from "react";
import water from "./img/water.jpg";

export default function Piece11() {
  return (
    <div className="Piece11">
      <h3>11</h3>
      <br />
      <div className="Prayer">
        <p>
          Е МА! <sup>1</sup>
        </p>
        <br />
        <p>Сюхвилинне ріґпа безсутнісне й ясне.</p>{" "}
        <p>
          Це й є вершиною всіх <em className="term">світоглядів</em>.
        </p>{" "}
        <br />
        <p>Воно безрозсудливе, всеохоплююче й відійшло від усього.</p>{" "}
        <p>
          Це й є вершиною всіх <em className="term">споглядань</em>.
        </p>{" "}
        <br />
        <p>Воно нічого не поліпшує й цілком відповідне світові.</p>{" "}
        <p>
          Це й є вершиною всіх <em className="term">практик</em>.
        </p>{" "}
        <br />
        <p>Його неможливо завоювати, воно первісно самодосконало.</p>{" "}
        <p>
          Це й є вершиною всіх <em className="term">плодів</em>.
        </p>
        <br />
      </div>

      <div>
        <img className="img-fluid" src={water} alt="water" />
      </div>
      <hr />
      <em>
        <p>
          <sup>1</sup> Те саме, що й "Е МА ГО" – "як чудово!"
        </p>
      </em>
      <br />
    </div>
  );
}
