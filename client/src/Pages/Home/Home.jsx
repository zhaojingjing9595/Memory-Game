import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              Hello <span>{activeUser.nickName}</span>, welcome to our Game!{" "}
            </h1>
            <p className="display-6">
              If you want to play, just <Link to="/getin">LogIn</Link>
            </p>
          </>
        )}
      </Container>
    </div>
  );
}

export default Home;
