import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import logo from '../Images/emmaweblogo.png';



const Style = styled.div`
  .bg-light {
    background: #1F2235 !important;
    height: 5vh;
    padding: 2.5rem 3rem 2rem 3rem;
  }
  .logo {
    width: 50%;
    margin-right: 30rem;

  }
  .btn-outline-success {
    font-size: 1.1rem;
    font-weight: 600;
    color: #10243E;
    background-color: #48DFCE;
    outline: none;
    border: none;
    padding: 1rem 3rem;
    font-family: 'DM Sans', sans-serif;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    font-size: 1.1rem;
    font-weight: 600;
    color: #10243E;
    padding-right: 2rem;
    font-family: 'DM Sans', sans-serif;

  }
  .navbar-light .navbar-nav .nav-link {
    padding-left: 2.3rem;
  }
  a { 
    color: #fff !important;
  }
  h1 {
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
        .d-flex {
          justify-content: center !important;
          background: #fff;

        }
        .navbar-collapse {
          background: #1F2235;
        }
        .bg-light {
          height: 10vh;
        }
        .navbar-toggler-icon {
          width: 2.5rem !important;
          height: 2.5rem !important;
        }
  }
  @media screen and (max-width: 375px) {
    .bg-light {
      padding: 2rem;
    }
    // .navbar-brand {
    //   background-image: url(${logo});
    //   background-size: cover;
    //   background-position: center
    // }
    .logo {
      object-fit: contain;
    }
  }
`;


function Navigation() {
  return (
    <Style>
    <div >
       <Navbar  bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand><Link to='/'><h1>EMMAWEB</h1></Link> </Navbar.Brand>
     {/* <Navbar.Brand><Link to='/'><img src={logo} alt='' className='logo'/></Link> </Navbar.Brand> */}
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse  id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><a href="#">Home</a></Nav.Link>
        <Nav.Link><a href="#Services">Service</a></Nav.Link>
        <Nav.Link><a href="#About">About</a></Nav.Link>
        <Nav.Link><a href="#Skills">Skills</a></Nav.Link>
        <Nav.Link><a href="#Portfolio">Portfolio</a></Nav.Link>
        <Nav.Link><a href="#Blog">Blog</a></Nav.Link>
        <Nav.Link><a href="#Contact">Contact</a></Nav.Link>
      </Nav>
      <Form className="d-flex">
        {/* <Button variant="outline-success"><Link to='/GetQuote'>Get Quote</Link><BsArrowRight/></Button> */}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    </Style>
  )
}



export default Navigation