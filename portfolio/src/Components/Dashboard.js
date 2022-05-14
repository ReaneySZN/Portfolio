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
import {BiSearchAlt} from 'react-icons/bi'
import {BiCalendarCheck} from 'react-icons/bi'
import {IoCaretDownOutline} from 'react-icons/io5'
import piechart from '../Images/pie-chart.png'
import chart from '../Images/chart-1.png'
import ethchart from '../Images/eth-chart.jpg'
import {GoPrimitiveDot} from 'react-icons/go'
import {IoCaretUpOutline} from 'react-icons/io5'
import admin from '../Images/admin.jpg'
import {BiBell} from 'react-icons/bi'
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5'
import blue from '../Images/blue.jpg'
import avatar1 from '../Images/avatar-1.jpg'
import avatar2 from '../Images/avatar-2.jpg'
import avatar3 from '../Images/avatar-3.jpg'
import avatar4 from '../Images/avatar-4.jpg'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

const Style = styled.div`
    min-height: 200vh;
    width: 100%;
    padding: 2rem 2rem;
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
    input {
        border: none;
        outline: none;
        background: #dee2e6;
    }
    .search-bar { 
        display: flex;
        margin-left: 1rem;
        margin-top: 1.3rem;
        span {
            padding-right: .5rem;
        }
       
    }
    .main-page {
        background: #dee2e6;
        border-radius: 10px;
        padding: 0 2rem;
    }
    .overview-sales {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-top: 2rem;
        p span {
            font-weight: 700;
        }

        h1 {
            font-size: 2rem;
            font-weight: 700;
            text-align: left;
        }
    }
    .rounded {
        border-radius: 20px !important;
    }
    .pie-chart .mb-5 {
        margin-bottom: 3rem !important;
    }
    .pie-chart-img {
        img {
            width: 100%;
        }
    }
    .line {
        flex-direction: column;
    }
    .value { 
     span {
        color: green;
        padding-left: .5rem;
        font-weight: 100;
        }
    }
    .pie-text {
        justify-content: space-between;
        align-items: center;
    }
    .summ {
        justify-content: space-between;
        h4 {
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
    .chart-img {
        
        img {
            width: 100%;
            height: 19vh !important;
            border-radius: 20px;
        }
    }
    .rate {
        display: flex;
        flex-direction: column;
        h4 {
            font-size: 1.2rem;
            font-weight: 700;
            text-align: left;
        }
        p {
            span {
                color: green;
                font-weight: 100;
            }
        }
    }
    .chart {
        background: #fff;
        border-radius: 20px;
        padding: 1rem 0;
        width: 50%;
        height: 31vh !important;
        margin-bottom: 3rem !important;
    }
    .top-chart {
        justify-content: space-evenly;
    }
    .eth-flow {
        background: #fff;
        padding: 1rem;
        border-radius: 20px;
        h4 {
            font-size: 1.2rem;
            font-weight: 700;
            text-align: left;
        }
        .eth-chart-img {
            padding: 2rem 0;

            img {
                width: 100%;
                height: 20vh;
            }
        }
        .pricing {
            text-align: left;
            display: flex;
            align-items: center;

            h2 {
                padding-right: 3rem;
                font-size: 1.7rem;
            }
            p {
                color: green;
            }
        }
    }
    .side-page {
        background: #dee2e6;
        border-radius: 10px;
        padding: 1rem 2rem;
        
        .admin-pro {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            .admin-img {
                img {
                    border-radius: 50px;
                    width: 50px;
                    height: 50px;
                }
                .name-tag-pro {
                    padding-left: 1rem;
                    margin-top: .6rem;

                    h4 {
                        padding: 0;
                        margin: 0;
                        text-align: left;
                    }
                    p {
                        margin: 0;
                    }
                }
            }
        }
        .sales-graph {
            h4 {
                text-align: left;
            }
        }
        .option {
            display: flex;
            justify-content: space-between;

            span {
                font-size: .9rem;
            }
        }
        .liquid-img {
            position: relative;
            overflow: hidden;
            margin-bottom: 2rem;

            h4 {
                font-size: 1.2rem;
                color: #fff;
            }
            img {
                display: block;
                width: 100% !important;
                aspect-ratio: 1/1;
                object-fit: cover;
                object-position: center;
                border-radius: 20px;
            }
            .con-word {
                position: absolute;
                inset: 0;
                background: rgba(255, 255, 255, .4);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 3rem 1rem;
                height: 10vh;
                border-radius: 30px;
                top: 18rem !important;
                border-top-left-radius: 0px !important;
                border-top-right-radius: 0px !important;
                width: 100% !important;
                
                    p {
                        text-align: left;
                        color: #fff;
                    }
            }
        }
        .auctions {
            p {
                margin: 0;
            }
            .ava-img {
                display: flex;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50px;
                    margin-right: 1rem;
                }
                .name-tag {
                    text-align: left;
                }
                .signs p {
                    font-size: .9rem;
                }
            }
        }
        .avatar-1 {
            border-radius: 10px !important;
            margin-bottom: 1rem !important;
        }
        .avatar-2, .avatar-3, .avatar-4 {
            background: #fff;
            border-radius: 10px;
            padding: 1rem;
            margin: 1rem 0;
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
        .pie-chart {
            width: 40%;
        } 
        .chart-img img {
            height: 15vh;
        }
        .chart {
            height: 22vh;
        }
        .side-page .liquid-img img {
            width: 50% !important;
            margin: 0 auto;
        }
        .side-page .liquid-img .con-word {
            top: 21rem;
            width: 50% !important;
            margin: 0 auto;
        }
        
        
    }

    @media screen and (max-width: 375px) {
        .container-fluid {
            flex-wrap: nowrap;
        }
        .nav-logo span {
            padding-top: .3rem;
        }
        .pie-chart {
            width: 100%;
            margin-bottom: 3rem!important;
        }
        .chart {
            width: 100%;
            margin-bottom: 2rem;
            height: 36vh;
        }
        .chart-img img {
            height: 25vh;
        }
        .eth-flow {
            margin: 1rem -1rem;
        }
        .side-page .liquid-img .con-word {
            top: 19.3rem;
            width: 100%;
        }
        .side-page .liquid-img img {
            width: 100%;
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

function Dashboard() {
  return (
    <Style>
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
            <div className='row'>
            <div className='col-lg-2 container'>
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
            <div className='col-lg-7 container main-page'>
                <div className='search-bar'>
                    <span><BiSearchAlt size={15}/></span>
                    <input type='text' placeholder='Search for anything...'/>
                </div>
                <div className='overview-sales'>
                   <div className='sales'>
                   <h1>Sales</h1>
                   <p>Welcome to NFT dashboard</p>
                   </div>
                   <div className='calend'>
                       <p><BiCalendarCheck/> Today <span>December 8 <IoCaretDownOutline color={'black'}/></span></p>
                   </div>
                </div>
                <div className='top-chart row'>
                    <div className='pie-chart col-lg-5 shadow p-3 mb-5 bg-body rounded'>
                    <div className='summ d-flex'>
                        <h4>Summary</h4>
                        <p>This Month <IoCaretDownOutline/></p>
                        </div>
                        <div className='pie-text d-flex'>
                        <div className='pie-chart-img'>
                        <img src={piechart} alt=''/>
                        </div>
                        <div className='line d-flex'>
                        <div className='numbers'>
                            <div className='title'><GoPrimitiveDot size={20} color={'red'}/> Visitor</div>
                            <div className='value'><p><b>2,456</b> <span>+55%</span></p></div>
                        </div>
                        <div className='numbers'>
                            <div className='title'><GoPrimitiveDot size={20} color={'#b4b7b9'}/> Offers</div>
                            <div className='value'><p><b>1,344</b> <span>+30%</span></p></div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='chart col-lg-7'>
                        <div className='summ d-flex px-3'>
                        <div className='rate'>
                        <h4>Statistic</h4>
                        <p><IoCaretUpOutline color={'green'}/><b>1,190</b> <span>+75%</span> Artwork solid</p>
                        </div>
                        <p>This Month <IoCaretDownOutline/></p>
                        </div>
                    <div className='chart-img '>
                        <img src={chart} alt=''/>
                        </div>
                    </div>
                </div>
                <div className='eth-flow'>
                    <div className='d-flex justify-content-between'>
                        <h4>ETH Rate</h4>
                        <p>This Month <IoCaretDownOutline/></p>
                    </div>
                    <div className='pricing '>
                        <h2><b>$3,455.62 USD</b></h2>
                        <p>+$565.62 USD (12.5%)</p>
                    </div>
                    <div className='eth-chart-img'>
                        <img src={ethchart} alt=''/>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 side-page'>
                <div className='admin-pro'>
                    <div className='admin-img d-flex'>
                        <img src={admin} alt=''/>
                        <div className='name-tag-pro'>
                            <h4><b>Arip</b></h4>
                            <p>Collector</p>
                        </div>
                    </div>
                    <div className='icon d-flex justify-content-between'>
                    <BiBell size={20}/>
                    <IoChatbubbleEllipsesOutline size={18}/>
                    </div>
                </div>
                <div className='sales-graph'>
                    <h4><b>Best Sales</b></h4>
                    <div className='option'>
                        <p><b>2,345</b> <span>Sales</span></p>
                        <p>View All</p>
                    </div>
                    <div className='liquid-img'>
                        <img src={blue} alt=''/>
                        <div className='con-word'>
                            <div className='blue-text'>
                                <h4><b>Blue Liquid</b></h4>
                                <p>Abstract</p>
                            </div>
                            <div className='blue-para'>
                               <p>Last Bid</p>
                               <h4><b>0.86 ETH</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                <div className='bid-option d-flex justify-content-between'>
                        <h5><b>History of bids</b></h5>
                        <p>View All</p>
                    </div>
                    <div className='auctions'>
                        <div className='avatar-1 d-flex justify-content-between align-items-center shadow p-3 mb-5 bg-body rounded'>
                            <div className='ava-img'>
                            <img src={avatar1} alt=''/>
                            <div className='name-tag'>
                            <h5><b>0.86 ETH</b></h5>
                            <p>Davis Colzoni</p>
                        </div>
                            </div>
                            <div className='signs'>
                                <IoCaretUpOutline size={20} color={"green"}/>
                                <p>07:35am</p>
                            </div>
                        </div>
                        <div className='avatar-2 d-flex justify-content-between align-items-center'>
                            <div className='ava-img'>
                            <img src={avatar2} alt=''/>
                            <div className='name-tag'>
                            <h5><b>0.80 ETH</b></h5>
                            <p>Tiana Dokids</p>
                        </div>
                            </div>
                            <div className='signs'>
                                <IoCaretDownOutline size={20} color={'red'}/>
                                <p>07:30am</p>
                            </div>
                        </div>
                        <div className='avatar-3 d-flex justify-content-between align-items-center'>
                            <div className='ava-img'>
                            <img src={avatar3} alt=''/>
                            <div className='name-tag'>
                            <h5><b>0.78 ETH</b></h5>
                            <p>Hanna Levin</p>
                        </div>
                            </div>
                            <div className='signs'>
                                <IoCaretDownOutline size={20} color={'red'}/>
                                <p>07:25am</p>
                            </div>
                        </div>
                        <div className='avatar-4 d-flex justify-content-between align-items-center'>
                            <div className='ava-img'>
                            <img src={avatar4} alt=''/>
                            <div className='name-tag'>
                            <h5><b>0.70 ETH</b></h5>
                            <p>Nalan Baptiana</p>
                        </div>
                            </div>
                            <div className='signs'>
                                <IoCaretDownOutline size={20} color={'red'}/>
                                <p>07:20am</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </Style>
  )
}

export default Dashboard