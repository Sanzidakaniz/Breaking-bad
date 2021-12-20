import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';



const Header = () => {
    return (
   
      <>
 
  
  <Navbar className="nav-color">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png"
        width="10"
        height="10"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
  </Container>
  </Navbar>

 
</>
   

       
    );
};

export default Header;

{/* <img src="https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png" alt="" /> */}