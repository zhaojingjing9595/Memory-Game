import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Registration({
  email,
  setEmail,
  pwd,
  setPwd,
  confirmPwd,
  setConfirmPwd,
  nickName,
  setNickName,
  setIsMember,
}) {
  return (
    <>
      <p>
        Are you registered?{" "}
        <Button variant="link" onClick={setIsMember}>
          Log In
        </Button>
      </p>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Nickname</Form.Label>
        <Form.Control value={nickName} onChange={setNickName} type="name" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={setEmail} type="email" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={setPwd} type="password" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Repete Password</Form.Label>
        <Form.Control
          value={confirmPwd}
          onChange={setConfirmPwd}
          type="password"
        />
      </Form.Group>
    </>
  );
}

export default Registration;
