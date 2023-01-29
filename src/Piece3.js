import React from "react";
import mind from "./img/mind.png";

export default function Piece3() {
  return (
    <div className="Piece3">
      <h3>3</h3>
      <br />
      <p>
        Якщо це блискуче усвідомлення, яке звуть розумом, розглядати як таке, що
        існує, то воно не існує.{" "}
      </p>

      <p>
        Якщо розглядати як джерело — то самсара й нірвана, й усе розмаїття
        блаженства й страждання виникли з нього.{" "}
      </p>

      <p>
        Якщо розглядати як об’єкт бажання, то одинадцять колісниць прагнуть до
        нього.{" "}
      </p>

      <br />
      <p>Імен же йому стільки, що й не злічити.</p>

      <p>
        Одні звуть його <em className="term">природою розуму</em> — розум як він
        є.{" "}
      </p>

      <p>
        Тиртики звуть <em className="term">атман</em> — самість.{" "}
      </p>

      <p>
        Шраваки наполягають на <em className="term">анатмані</em> — відсутності
        Я.{" "}
      </p>

      <p>
        Читтаматрини звуть його <em className="term">віджняна</em> — свідомість.{" "}
      </p>

      <p>
        Хто кличе <em className="term">Праджняпараміта</em> — Позамежна
        Мудрість.{" "}
      </p>

      <p>
        Хто кличе <em className="term">Сугатагарбга</em> — насіння Сугати.{" "}
      </p>

      <p>
        Хто кличе <em className="term">Магамудра</em> — Великий Символ.{" "}
      </p>

      <p>
        Хто кличе <em className="term">самотнє Тігле</em> — унікальна сфера.{" "}
      </p>

      <p>
        Хто кличе <em className="term">Дгармадгату</em> — дгармовий простір.{" "}
      </p>

      <p>
        Хто кличе <em className="term">Алая</em> — основа всього.
      </p>

      <p>
        {" "}
        Хто кличе <em className="term">звичайним усвідомленням</em>.
      </p>

      <div>
        <img className="img-fluid" src={mind} alt="mind" />
      </div>
    </div>
  );
}