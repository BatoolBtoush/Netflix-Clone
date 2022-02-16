import React from 'react';
import { Card, CardGroup } from "react-bootstrap";
// import Movie from './Movie';

function FavList(props) {
    console.log(props);

  return (
    <>
        <CardGroup style={{ display: "flex" }}>
            {
                
                (props.favoriteList && props.favoriteList.map(move => {
                    return (
                        <Card key={move.id}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${move.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{move.title}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card> )
                    
                }))
            }
            
        
        </CardGroup>
        </>
  )
}

export default FavList;
