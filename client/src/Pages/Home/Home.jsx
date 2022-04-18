import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home() {
  const { activeUser } = useAuth();
  return (
    <div className="home">
      <Container>
        {!activeUser ? (
          <>
            <h1 className="display-1 mt-5">Welcome to our Game!</h1>
            <p className="display-6">
              If you want to play, just <Link to="/getin">LogIn</Link>
            </p>
          </>
        ) : (
          <>
            <h1 className="display-1 mt-5">
              Hello {activeUser.nickName}, welcome to our Game!{" "}
            </h1>
            <p className="display-6">Last amount of turns: 16</p>
            <p className="display-6">Best Performance: 8</p>
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
