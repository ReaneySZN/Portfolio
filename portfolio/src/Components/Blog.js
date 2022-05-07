import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'
import blog1 from '../Images/blogpost-1.png'
import blog2 from '../Images/blogpost-2.jpg'
import blog3 from '../Images/blogpost-3.jpg'

const Style = styled.div `
   padding: 5rem 0;
    min-height: 100vh;
    background: #23263AFA;
  .card {
    background-color: #23263AFA;
        padding: 0;
        margin: 0 1rem;
        border-radius: 10px;
        border: 1px solid transparent;
        width: 300px !important;
    }
    .card-body {
        background-color: #1F2235;
        border-radius: 0px 0px 10px 10px ;
    }
    .card-img, .card-img-top {
        // width: 100%;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 10px 10px 0px 0px;
    }
    .card-img-top:hover {
      transform: scale(1.1);
      transition: .5s ease-in-out;
    }
    .carding {
      margin: 1rem auto;
  }
  .card-title, p {
      color: #fff;
  }
  .b-btn {
      display: flex;
      justify-content: space-between;
  }
  .b-btn Button {
      background-color: transparent;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
  }
  .port-h {
    font-size: 3rem;
    color: red;
    font-weight: 700;
    padding-bottom: 5rem;
}

@media screen and (max-width: 768px){
  .carding {
    display: flex;
    justify-content: center;
  }
  .card {
    margin: 1rem;
  } 
}

@media screen and (max-width: 375px){
  .card {
    width: 300px !important;
    margin-left: 1.5rem;
  }
}
`

function Blog() {
  return (
    <Style>
      <div>
      <h1 className='port-h'>Blog</h1>
        <div className='container'>
          <div className='row carding'>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog1} />
  <Card.Body>
    <Card.Title>Different design patterns</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary">JavaScript</Button>
    <p variant="primary">Dec 18th, 2020</p>
    </div>
  </Card.Body>
</Card>
            </div>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog2} />
  <Card.Body>
    <Card.Title>Social network designs</Card.Title>
    <Card.Text>
    Earum officiis, totam nesciunt, numquam ratione at aperiam voluptatum dolor eos commodi fuga esse delectus!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary">React</Button>
    <p variant="primary">Jan 2nd, 2021</p>
    </div>
  </Card.Body>
</Card>
            </div>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog3} />
  <Card.Body>
    <Card.Title>Creative coding tips</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero rem quaerat debitis porro voluptatum.
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary">Python</Button>
    <p variant="primary">Jan 8th, 2021</p>
    </div>
  </Card.Body>
</Card>
            </div>
          </div>
        </div>
    </div>
    </Style>
  )
}

export default Blog