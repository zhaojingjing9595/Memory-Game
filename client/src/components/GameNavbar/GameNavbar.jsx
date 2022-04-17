import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import "./GameNavbar.css";
function GameNavbar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            JingLan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                My Pets Page
              </Nav.Link>
              <>
                <Nav.Link to="/game" as={NavLink}>
                  Game
                </Nav.Link>
              </>
            </Nav>
            <Nav className="me-auto auth">
              <Nav.Link>Log In</Nav.Link>
              <Nav.Link>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default GameNavbar;