import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import "./GameNavbar.css";
function GameNavbar() {
  const { activeUser, onLogOut } = useAuth();
  const navigate = useNavigate();
  function handleLogOut() {
    onLogOut();
    navigate("/");
  }

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
              {activeUser && (
                <Nav.Link to="/game" as={NavLink}>
                  Game
                </Nav.Link>
              )}
            </Nav>
            <Nav className="me-auto auth">
              {!activeUser ? (
                <Nav.Link to="getin" as={NavLink}>
                  LogIn
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default GameNavbar;
