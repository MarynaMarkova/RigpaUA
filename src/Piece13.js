import React from "react";
import zvyah from "./img/zvyah.png";

export default function Piece13() {
  return (
    <div className="Piece13">
      <h3>13</h3>
      <br />
      <p>Тепер про чотирьох непохитних, відомих як «цвяхи».</p>
      <br />
      <div className="Prayer">
        <p>Ясність сюхвилинного усвідомлення – </p>
        <p>
          це великий непохитний цвях <em className="term">світогляду</em>.{" "}
        </p>
        <p>Оскільки ця ясність непохитна в трьох часах, </p>
        <p>то її звуть цвяхом. </p>
        <br />
        <p>Ясність сюхвилинного усвідомлення – </p>
        <p>
          це великий непохитний цвях <em className="term">споглядання</em>.{" "}
        </p>
        <p>Оскільки ця ясність непохитна в трьох часах, </p>
        <p>то її звуть цвяхом. </p>
        <br />
        <p>Ясність сюхвилинного усвідомлення – </p>
        <p>
          це великий непохитний цвях <em className="term">практики</em>.{" "}
        </p>
        <p>Оскільки ця ясність непохитна в трьох часах, </p>
        <p>то її звуть цвяхом. </p>
        <br />
        <p>Ясність сюхвилинного усвідомлення – </p>
        <p>
          це великий непохитний цвях <em className="term">плоду</em>.{" "}
        </p>
        <p>Оскільки ця ясність непохитна в трьох часах, </p>
        <p>то її звуть цвяхом.</p>
        <br />
      </div>

      <div>
        <img className="img-fluid" src={zvyah} alt="zvyah" />
      </div>
    </div>
  );
}