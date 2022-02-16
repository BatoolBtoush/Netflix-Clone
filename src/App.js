import './App.css';
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'; 
import Home from "./components/Home.js";
import Movie from './components/Movie';
import FavList from './components/FavList';
import Navbarr from './components/Navbar';


function App() {


  const [favoriteList, SetFavList] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/favorite`);

      const data = await res.json();
      SetFavList(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
   





  return (
    <>
    <Navbarr/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie' element= {<Movie/>} />
        <Route path='/favorite' element={<FavList/>} favoriteList={favoriteList} />
      </Routes>
    </>
   );
}

export default App;