import RIGPA_FULL from "./RIGPA_FULL.js";
import rigpa from "./img/rigpa.png";
// import Piece27 from "./Piece27.js";
// import RandomNuber from "./RandomNumber";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <a
        href="https://marynamarkova.github.io/rigpa-ua/"
        className="icon"
        title="Go Home"
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <div className="Container">
        <div className="Rigpa">
          <img className="img-fluid" src={rigpa} alt="rigpa" />
        </div>{" "}
        <RIGPA_FULL />
        {/* <RandomNuber /> */}
        {/* <Piece27 /> */}
        <div className="Author">
          <p>Падмасамбгава </p>
          <p>«Самовизволення через увагу, яка оголює, – </p>
          <p>прямий вступ до ріґпи»</p>
        </div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/MarynaMarkova/Bardo/tree/master"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Github code"
          >
            Open-source
          </a>
          {" by "}
          <a
            href="https://marynamarkova.github.io/"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Personal page"
          >
            Maryna Markova
          </a>
        </p>
        <p className="PhotoBy PhotoInside">
          Photo "Starry Night" by{" "}
          <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jake Weirick
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/XL0SE4rtRwg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
