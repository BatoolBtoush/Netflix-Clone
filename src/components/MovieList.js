import React from "react";
//import Movie from "./Movie";
import { Card, CardGroup } from "react-bootstrap";

function MovieList(props) {
  // looping through the fetched data
   console.log(props);

   return (
    <>
       <CardGroup>
         {props.trending.map((trend) => {
        return (
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>{trend.title}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </CardGroup> 
   </>
  );
}

export default MovieList;
