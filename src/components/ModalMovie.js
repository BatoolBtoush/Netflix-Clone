import { Form, Modal, Button } from "react-bootstrap";
// import React, { useEffect, useState } from 'react';
import { useRef } from "react";

function ModalMovie(props) {


  const commentRef = useRef();
  function handleCaption(bat) {
    bat.preventDefault()
    const userCaption = commentRef.current.value;
    ;
    const newData = { ...props.move, userCaption };
    props.updateCaption(newData, props.move.id);
  }


  async function addToFavList(move) {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: move.title,
          poster_path: move.poster_path,
        }),
      });
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log("error", error);
    }
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
        <Modal.Body>
        </Modal.Body>
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
          <Button variant="primary" onClick={()=> addToFavList(props.move)}>add to FavList</Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}
export default ModalMovie;
