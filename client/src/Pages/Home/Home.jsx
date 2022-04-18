import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getUserBestScore, getUserLastScore } from "../../services/api";

function Home() {
  const { activeUser } = useAuth();
  const [ lastScore, setLastScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(0);
 
  
  // useEffect(() => {
  //   async function getScores() {
  //     const lastScore = await getUserLastScore(activeUser.id);
  //     const bestScore = await getUserBestScore(activeUser.id);
  //     setLastScore(lastScore.turns);
  //     setBestScore(bestScore.turns);
  //     console.log(lastScore, bestScore);
  //   }
  //   getScores();
  // }, [lastScore, bestScore]);

  return (
    <div className="home">
      <Container>
        {!activeUser ? (
          <>
            <h1 className="display-1 mt-5">Welcome to our Game!</h1>
            <p className="display-6">
              If you want to play, just <Link to="/getin">LogIn</Link>
            </p>
            <h3 className="display-4 my-4" style={{ color: "#ffc107" }}>
              Instructions
            </h3>
            <p className="display-6">
              The player has to match two of the same cards. The amount of turns
              you need to complete the game is your score, so try to do it in
              the minus possible!
            </p>
          </>
        ) : (
          <>
            <h1 className="display-1 mt-5">
              Hello {activeUser.nickName}, welcome to our Game!{" "}
            </h1>
            <p className="display-6">Last amount of turns: {lastScore}</p>
            <p className="display-6">Best Performance: {bestScore}</p>
            <Button size="lg" variant="warning" to="game" as={NavLink}>
              Start Game
            </Button>{" "}
          </>
        )}
      </Container>
    </div>
  );
}

export default Home;
