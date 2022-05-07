import React from 'react'
import styled from 'styled-components'
import clock from '../Images/analog-clock.png'
import event from '../Images/event-logger.png'
import typing from '../Images/typing-game.png'
import firework from '../Images/fireworks.png'
import calendar from '../Images/calendar.png'
import website from '../Images/tech-breeze.png'
import {AiFillGithub} from 'react-icons/ai';
import {HiExternalLink} from 'react-icons/hi';
import { Card, Button } from 'react-bootstrap'

const Style = styled.div`
    padding: 5rem 0;
    min-height: 100vh;
    background: #1F2235;
    
    .website {
        width: 60%;
        object-fit: cover;
        border-radius: 10px;
    }
    .clock {
        width: 40%;
        object-fit: cover;
        border-radius: 10px;
    }
    .event {
        width: 50%;
        object-fit: cover;
        border-radius: 10px;
    }
    .tying {
        width: 50%;
        object-fit: cover;
        border-radius: 10px;
    }
    .card {
        background-color: #1F2235;
        padding: 0;
        margin: 0 1rem;
        border-radius: 10px;
        border: 1px solid transparent;
        width: 350px !important;
    }
    .card-body {
        background-color: #23263AFA;
        border-radius: 0px 0px 10px 10px ;
    }
    .card-img, .card-img-top {
        // width: 100%;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 10px 10px 0px 0px;
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
      }
      .carding {
        justify-content: space-between;
      }
    }
`

function Portfolio() {
  return (
    <Style>
        <div>
            <h1 className='port-h'>Portfolio</h1>
            <div className='container ports'>
                <div className='row carding'>
            <div className='card col-lg-4'>
        <Card className='' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={website} />
  <Card.Body>
    <Card.Title>Tech Breeze</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
    </div>
  </Card.Body>
</Card>
        </div>
<div className='card col-lg-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clock} width='18rem' />
  <Card.Body>
    <Card.Title>Analog Clock</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
    </div>
  </Card.Body>
</Card>
</div>
<div className='card col-lg-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={firework} width='18rem' />
  <Card.Body>
    <Card.Title>Canvas Fireworks</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
    </div>
  </Card.Body>
</Card>
</div>
        </div>
        <div className='row carding'>
<div className='card col-lg-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={event} />
  <Card.Body>
    <Card.Title>Event Logger</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
    </div>
  </Card.Body>
</Card>
        </div>
        <div className='card col-lg-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={typing} />
  <Card.Body>
    <Card.Title>Tying Game</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
    </div>
  </Card.Body>
</Card>
        </div>
        <div className='card col-lg-4'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={calendar} width='18rem' />
  <Card.Body>
    <Card.Title>Calendar</Card.Title>
    <Card.Text>
    Enim praesentium, dolorum, voluptatibus in quasi minus<br/>
     cupid itate aliquid pariatur laudantium adipisci expedita!
    </Card.Text>
    <div className='b-btn'>
    <Button variant="primary"><HiExternalLink/>Demo</Button>
    <Button variant="primary"><AiFillGithub/>Source</Button>
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

export default Portfolio