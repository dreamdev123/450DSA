import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SubscriptionModal = ({ show, handleClose }) => {
  const history = useHistory();

  const handleSubscribe = () => {
    handleClose();
    history.push("/subscribe"); 
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Unlock Premium Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Get access to exclusive topics and resources by subscribing!</p>
        <ul>
          <li>Questions classified according to your need.</li>
          <li>Premium question sets.</li>
          <li>More that exclusive 450+ questions.</li>
          <li>Lifetime Subscription Access.</li>
        </ul>
        <p>Subscribe now for only <b>Rs.999!</b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubscribe}>
          Subscribe Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubscriptionModal;
