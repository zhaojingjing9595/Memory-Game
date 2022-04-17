import React from "react";
import "./Card.css";
function Card({ card, handleChoice }) {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <>
      <img className="front" src={card.src} alt="card front" />
      <img
        className="back"
        src={"/img/cover.png"}
        onClick={handleClick}
        alt="card back"
      />
    </>
  );
}

export default Card;
