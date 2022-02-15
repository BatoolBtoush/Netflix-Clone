import React from "react";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";



function Home() {



    const [trending, setTrending] = useState(); //after fetching the data i want to send it to the child (MovieList)
    // down <MovieList /> i rendered the whole data not the function (fetchData)


  const fetchData = async () => { //function for fetching data
    try {
      const response = await fetch(`https://movieslibrary-batool.herokuapp.com/trending`);
      console.log(response);
      const dataConvertToJson = await response.json();
      console.log(dataConvertToJson);
      setTrending(dataConvertToJson); //now the trending contains the data i got it from the backend
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { //the first thing to be executed 
    fetchData();
  }, []);

  return ( //rendering or returning
    <>
      <h1>home</h1>
      <MovieList x={trending} /> 
    </>
  );
}

export default Home;
