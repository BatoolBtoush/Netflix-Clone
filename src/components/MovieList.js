import React from "react";
import Movie from "./Movie";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "./ModalMovie";

function MovieList(props) {
  // looping through the fetched data
  const [showModal, setShowModal] = useState(false);
  const [move, setMove] = useState(props);

  return (
    <>
      <CardGroup
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200rem",
          height: "20rem",
        }}
      >
        {props.trending &&
          props.trending.map((trend) => {
            return (
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{trend.title}</Card.Title>
                  <Card.Text>
                 {trend.caption ? trend.caption : "No Caption Added"}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setMove(move);
                      setShowModal(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </CardGroup>
      {showModal && (
        <ModalMovie
          showModal={showModal}
          move={move}
          handleClose={() => {
            setShowModal(false);
          }}
          updateCaption={props.updateCaption}
        />
      )}

      <Movie />
    </>
  );
}

export default MovieList;

