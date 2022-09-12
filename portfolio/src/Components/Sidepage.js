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
    .side-page .liquid-img img {
        width: 50% ;
        margin: 0 auto;
    }
    .side-page .liquid-img .con-word {
        top: 21rem;
        width: 50% ;
        margin: 0 auto;
    }
    
    
}

@media screen and (max-width: 375px) {
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

function Sidepage() {
  return (
    <Style>
        <div>
        <div className='side-page'>
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

export default Sidepage