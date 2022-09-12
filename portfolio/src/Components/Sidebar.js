import React from 'react'
import styled from 'styled-components'
import nft from '../Images/NFT.jpg'
import rocket from '../Images/rocket.png'
import {RiDashboardLine} from 'react-icons/ri'
import {BiWalletAlt} from 'react-icons/bi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsBarChartLine} from 'react-icons/bs'
import {IoExitOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';


const Style = styled.div`
.btn {
    color: #fff;
}

.Navigation {
    display: none;
}
.blue {
    color: blue;
}
.black {
    color: black;
}
.nft-img {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-bottom: 2rem;
    img {
        width: 30%;
    }
    span {
        font-weight: 700;
        font-size: 2rem;
    }
    p {
        font-size: 2rem;
        margin-top: .7rem;
    }
}
ul {
    text-align: left;
    li {
        padding: 1rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.2rem;
        span {
            padding-right: .5rem;
        }
    }
}
.beneath {
    .pro-img {
        margin-top: 5rem;
        img {
        border-radius: 20px;
        width: 80%;
        }
    }
}
.log {
    font-size: 1.2rem;
    margin-top: 3rem;
}
.btn {
    background: #2f184a;
    border-radius: 5px;
    margin-top: 2rem;
}
   
}

@media screen and (max-width: 768px) {
    .Navigation {
        display: block;
    }
    .comp {
        display: none;
    }
    .nav-logo {
        display: flex;
        align-items: center;

        h1 {
            font-weight: 700;
            padding-top: .6rem;
            color: #000;
        }
        span {
            font-weight: 600;
            font-size: 1.5rem;
            padding-top: .6rem;
            color: #000;
        }
        img {
            width: 20%;
            margin-right: 1rem;
        }
    }
    .bg-light {
        background: transparent !important;
    }
}
.form {
    flex-direction: column;

    button {
        padding: 1rem;
        margin: 1rem 23rem;
        a {
            color: #fff;
        }
    }
}
.nav-link {
    a {
        color: #000 !important;
    }
    font-size: 1.2rem;
    font-weight: 500;
    }
}

@media screen and (max-width: 375px) {
    .container-fluid {
        flex-wrap: nowrap;
    }
    .nav-logo span {
        padding-top: .3rem;
    }
    .navbar-collapse {
        overflow: hidden;
    }
    .form {
        flex-direction: column;
        button {
            margin: 0;
        }
    }
}
`

function Sidebar() {
  return (
    <Style>
        <div>
        <div className='Navigation'>
        <Navbar  bg="light" expand="lg">
   <Container fluid>
     <Navbar.Brand><Link to='/'><div className='nav-logo'><img src={nft} alt=''/><h1>NFT</h1><span>art</span></div></Link> </Navbar.Brand>
     <Navbar.Toggle  aria-controls="navbarScroll" />
     <Navbar.Collapse  id="navbarScroll">
       <Nav
         className="ms-auto my-2 my-lg-0"
         style={{ maxHeight: '100px' }}
         navbarScroll
       >
         <Nav.Link><Link  to="/">Dashboard</Link></Nav.Link>
         <Nav.Link><Link  to="/About">Wallet</Link></Nav.Link>
         <Nav.Link><Link  to="/Service">Product</Link></Nav.Link>
         <Nav.Link><Link  to="/Career">Customer</Link></Nav.Link>
         <Nav.Link><Link  to="/Contact">Promotion</Link></Nav.Link>
       </Nav>
       <Form className="d-flex justify-content-center form">
         <Button variant="outline-success"><Link to='/GetQuote'>Try PRO For Free</Link></Button>
         <p className='black log'><IoExitOutline size={15} color={'black'} /> Log Out</p>
       </Form>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 </div>
                <div className='comp'>
                <div className='nft-img'>
                    <img src={nft} alt=''/>
                    <p><span>NFT</span>art</p>
                </div>
              
              <ul>
                    <li className='blue'><span><RiDashboardLine size={15} color={'blue'}/></span>Dashboard</li>
                    <li className='black'><span><BiWalletAlt size={15} color={'black'}/></span>Wallet</li>
                    <li className='black'><span><MdProductionQuantityLimits size={15} color={'black'}/></span>Product</li>
                    <li className='black'><span><FiUsers size={15} color={'black'}/></span>Customer</li>
                    <li className='black'><span><BsBarChartLine size={15} color={'black'}/></span>Promotion</li>
                </ul>
                <div className='beneath'>
                    <div className='pro-img'>
                        <img src={rocket} alt=''/>
                    </div>
                    <button className='btn'>Try PRO For Free</button>
                    <p className='black log'><IoExitOutline size={15} color={'black'} />Log Out</p>
                </div>
              </div>
            </div>
    </Style>
  )
}

export default Sidebar