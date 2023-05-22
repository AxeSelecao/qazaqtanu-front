import { useState } from "react";
import LetterModal from "../../../../components/language/LetterModal";
import AlphabetComponent from "../../../../components/AlphabetComponent";

function Alphabet() {
  const kyrillicAlphabet = "АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫIЬЭЮЯ";
  const kyrillicAlphabetArr = kyrillicAlphabet.split("");
  const latinAlphabet = "AÄBDEFGĞHIİJKLMNÑOÖPQRSŞTUŪÜVYZ";
  const latinAlphabetArr = latinAlphabet.split("");
  const [letterModalActive, setLetterBookModalActive] = useState(false);
  const [symbol, setSymbol] = useState("A");

  const [alphabet, setAlphabet] = useState(kyrillicAlphabetArr);
  return (
    <div className="alphabet">
      <LetterModal
        active={letterModalActive}
        setActive={setLetterBookModalActive}
        symbol={symbol}
      />
      <h1>Әліппе</h1>
      <p
        style={{ width: "60%", marginTop: 25, marginBottom: 15, fontSize: 20 }}
      >
        Казахский алфавит состоит из 42 букв. 15 гласных и 25 согласных Ъ и б.
        Казахский алфавит, основанный на кириллице, имеет характерные для
        казахского языка девять букв. Это: б, г, н, к, у, у, у, х, и. Остальные
        буквы общие для русского и казахского языков.
      </p>
      <div style={{ width: "60%" }}>
        <AlphabetComponent />
      </div>
      {/*<div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}
      >
        <h2
          className="pointer"
          onClick={() => setAlphabet(kyrillicAlphabetArr)}
        >
          Кириллица
        </h2>
        <h2 className="pointer" onClick={() => setAlphabet(latinAlphabetArr)}>
          Латиница
        </h2>
      </div>
      <div className="alphabet__container">
        {alphabet.map((letter, index) => {
          if (index > 35) {
            return (
              <div
                className="alphabet__container-letter"
                onClick={() => {
                  setLetterBookModalActive(true);
                  setSymbol(letter);
                }}
                style={{ marginBottom: 0 }}
              >
                <p>{letter}</p>
                <p>{letter.toLowerCase()}</p>
              </div>
            );
          } else {
            return (
              <div
                className="alphabet__container-letter pointer"
                onClick={() => {
                  setLetterBookModalActive(true);
                  setSymbol(letter);
                }}
              >
                <p>{letter}</p>
                <p>{letter.toLowerCase()}</p>
              </div>
            );
          }
        })}
      </div>*/}
    </div>
  );
}

export default Alphabet;
