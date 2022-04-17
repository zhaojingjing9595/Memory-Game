import React from "react";

function Card({ src }) {
  return (
    <>
      <img className="front" src={src} alt="card front" />
      <img className="back" src={"/img/cover.png"} alt="card back" />
    </>
  );
}

export default Card;
