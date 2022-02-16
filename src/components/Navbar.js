import React from "react";
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <>
      {/* <Link to='/'>Home</Link>
  <Link to='/movie'>Movie</Link>   */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Netflix Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>
            <Nav.Link href="/favorite">Fav Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
