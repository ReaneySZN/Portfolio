import React from 'react'
import styled from 'styled-components'
import {Form, Button, Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Style = styled.div`
  .navbar {
    border-radius: 30px;
    background: #efefef;
    padding: .7rem .7rem;

    a {
      color: #000 !important;
      font-weight: 500 !important;
    }
  }
  .btn-outline-success {
     background: #af7cf2;
     padding: .8rem 2.3rem;
     border-radius: 20px;
     border: none;

     a {
       color: #fff !important;
       outline: none;
       border: none;
     }
  }
  .navbar-brand {
    font-weight: 900;
    font-size: 2rem;
  }

`

function Navigation() {
  return (
    <Style>
      <div>
         <Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand><Link to='/'>Agency</Link> </Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse  id="navbarScroll">
      <Nav
        className="m-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><a href="#">Home</a></Nav.Link>
        <Nav.Link><a href="#Services">Services</a></Nav.Link>
        <Nav.Link><a href="#About">Project</a></Nav.Link>
        <Nav.Link><a href="#Contact">Contact</a></Nav.Link>
      </Nav>
      <Form className="">
       <Button variant="outline-success"><Link to='/GetQuote'>Login</Link></Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    </Style>
  )
}

export default Navigation