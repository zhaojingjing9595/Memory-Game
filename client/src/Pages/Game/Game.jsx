import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Card from "../../components/Card/Card";
import ModalWin from "../../components/ModalWin/ModalWin";
import "./Game.css";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matches, setMatches] = useState(0);
  const [showModalWin, setShowModalWin] = useState(false);

  function shuffleCards() {
    setMatches(0);
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }
  function handleChoice(cardChosen) {
    choiceOne ? setChoiceTwo(cardChosen) : setChoiceOne(cardChosen);
  }
  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setMatches((prevMatches) => prevMatches + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matches === cardImages.length) {
      console.log("prueba");
      setShowModalWin(true);
    }
  }, [matches]);

  return (
    <div>
      <div className="header-container">
        <h2 className="display-5 my-3">Turns: {turns}</h2>
        {matches === cardImages.length && (
          <Button variant="warning" onClick={shuffleCards}>
            Reset Game
          </Button>
        )}
      </div>
      <Container className="card-grid">
        <Row>
          {cards.map((card) => (
            <Col key={card.id} md={3} className="card-game">
              <Card
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <ModalWin show={showModalWin} onHide={() => setShowModalWin(false)} />
    </div>
  );
}

export default Game;
