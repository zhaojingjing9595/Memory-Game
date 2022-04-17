import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./Game.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCards(shuffledCards);
    setTurns(0);
  }
  return (
    <div>
      <h1 className="display-4 my-3">Magic Match</h1>
      <Button variant="warning" onClick={shuffleCards}>
        Start the Game
      </Button>{" "}
      <Container>
        <Row>
          {cards.map((card) => (
            <Col key={card.id} md={3}>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src={"/img/cover.png"} alt="card back" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Game;