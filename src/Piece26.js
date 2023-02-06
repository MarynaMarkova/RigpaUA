import React from "react";
import Perception from "./img/Perception.png";

export default function Piece26() {
  return (
    <div className="Piece26">
      <h3>26</h3>
      <br />
      <p>Події відбуваються, та немає усвідомлення діючої особи. </p>

      <p>
        Хоча в речей і немає самобуття, та вони дійсно сприймаються через
        досвід.{" "}
      </p>

      <p>Якщо так практикувати – досягнеш звільнення. </p>

      <p>
        Пізнання відбувається через безпосереднє спирання на органи почуттів без
        утручання інтелекту.
      </p>

      <br />
      <div>
        <img className="img-fluid" src={Perception} alt="Perception" />
      </div>
    </div>
  );
}
