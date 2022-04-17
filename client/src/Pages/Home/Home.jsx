import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <Container>
        <h1 className="display-1 mt-5">Welcome to our Game! </h1>
        <p className="display-6">
          If you want to play our game, just <Link to="/getin">LogIn</Link>
        </p>
      </Container>
    </div>
  );
}

export default Home;
