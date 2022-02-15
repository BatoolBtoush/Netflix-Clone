import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Movie from './components/Movie';
import Navbarr from './components/Navbar';


function App() {
  return (
    <>
    <Navbarr/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie' element= {<Movie/>} />
      </Routes>
    </>
   );
}

export default App;
