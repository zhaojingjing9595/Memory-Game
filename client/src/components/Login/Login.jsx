import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Login({ email, setEmail, pwd, setPwd, setIsMember }) {
  return (
    <>
      <p>
        Are you not registered?{" "}
        <Button variant="link" onClick={setIsMember}>
          Sign up
        </Button>
      </p>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={setEmail} type="email" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={setPwd} type="password" />
      </Form.Group>
    </>
  );
}

export default Login;
