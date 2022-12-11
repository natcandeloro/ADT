import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" >
      <Container id='prede' >
        <Navbar.Brand href="#home" ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className="me-auto" >
            <NavLink to="/Nosotros"  id='menu' activeclassname="active">Nosotros</NavLink>
            <NavLink to="/Generalidades" id='menu' activeclassname="active">Espíritu</NavLink>
            <NavLink to="/Franquicia" id='menu' activeclassname="active">Franquicias</NavLink>
            <NavLink to="/Galeria"  id='menu' activeclassname="active">Galería</NavLink>
            <NavLink to="/Contacto" id='menu' activeclassname="active">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;