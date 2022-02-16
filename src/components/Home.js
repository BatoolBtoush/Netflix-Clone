import React from "react";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
//import { Container, Row } from "react-bootstrap";

function Home() {
  const [trending, setTrending] = useState(); //after fetching the data i want to send it to the child (MovieList)
  // down <MovieList /> i rendered the whole data not the function (fetchData)

  const fetchData = async () => {
    //function for fetching data
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/trending`
      );
      console.log(response);
      const dataConvertToJson = await response.json();
      //console.log(dataConvertToJson);
      setTrending(dataConvertToJson); //now the trending contains the data i got it from the backend
    } catch (error) {
      console.log(error);
    }
  };

  const updateCaption = (data, id) => {
    let updatedCap = trending.map(battrend => {
        if (battrend.id === id) {
          battrend.caption = data.userCaption;
            return battrend;
        }
        else return battrend;
    })
    setTrending(updatedCap)
}

  useEffect(() => {
    //the first thing to be executed
    fetchData();
  }, []);

  return (
    //rendering or returning
    <>
      <h1>home</h1>

      <MovieList trending={trending} updateCaption={updateCaption} />
    
    </>
  );
}

export default Home;
