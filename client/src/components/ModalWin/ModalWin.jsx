import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./ModalWin.css";

function ModalWin({ show, onHide }) {
  return (
    <Modal
      className="modal-win"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p>CONGRATULATIONS, YOU WIN!!!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWin;
