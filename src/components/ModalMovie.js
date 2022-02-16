import { Form, Modal, Button } from "react-bootstrap";
// import React, { useEffect, useState } from 'react';
import { useRef } from "react";

function ModalMovie(props) {
  const commentRef = useRef();
  function handleCaption(bat) {
    bat.preventDefault();
    const userCaption = commentRef.current.value;
    const newData = { ...props.move, userCaption };
    props.updateCaption(newData, props.move.id);
  }

  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => {
          props.handleClose();
        }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.move.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Form.Group>
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              ref={commentRef}
              type="textarea"
              placeholder={
                props.move.caption ? props.move.caption : "Add a comment"
              }
            />
          </Form.Group>
          <Button
            className="addBtn"
            variant="primary"
            type="submit"
            onClick={handleCaption}
          >
            Add a comment
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}
export default ModalMovie;
