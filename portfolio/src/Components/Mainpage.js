import React from 'react'
import styled from 'styled-components'
import {BiSearchAlt} from 'react-icons/bi'
import {BiCalendarCheck} from 'react-icons/bi'
import {IoCaretDownOutline} from 'react-icons/io5'
import piechart from '../Images/pie-chart.png'
import chart from '../Images/chart-1.png'
import ethchart from '../Images/eth-chart.jpg'
import {GoPrimitiveDot} from 'react-icons/go'
import {IoCaretUpOutline} from 'react-icons/io5'

const Style = styled.div`
.main-page {
    background: #dee2e6;
    border-radius: 10px;
    padding: 0 2rem;
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

@media screen and (max-width: 768px) {
  
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
}
`

function Mainpage() {
  return (
    <Style>
        <div>
        <div className='main-page'>
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
        </div>
    </Style>
  )
}

export default Mainpage