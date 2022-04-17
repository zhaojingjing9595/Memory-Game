import React from "react";
import "./Card.css";
function Card({ card, handleChoice, flipped, disabled }) {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }
  return (
    <div className={flipped ? "flipped" : ""}>
      <img className="front" src={card.src} alt="card front" />
      <img
        className="back"
        src={"/img/cover.png"}
        onClick={handleClick}
        alt="card back"
      />
    </div>
  );
}

export default Card;
