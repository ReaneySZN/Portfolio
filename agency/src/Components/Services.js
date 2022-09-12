import React from 'react'
import styled from 'styled-components'
import four from '../Images/pic4.jpg'

const Style = styled.div `
    padding: 5rem 0;

    .S-div-1 {
        h6 { 
            font-weight: 600;
            padding-bottom: 1rem;
        }
        h3 {
            font-size: 2.5rem;
            font-weight: 700;
        }
        span {
            color: #af7cf2;
        }
    }
    .S-div-2 {
        h4 {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
    .S-div-3 {
        text-align: left;

        h6 { 
            font-weight: 600;
            padding-bottom: 1rem;
        }
        h3 {
            font-size: 3rem;
            font-weight: 700;
            padding: 1rem 0;
        }
        span {
            color: #af7cf2;
        }
        .l-btn {
            background: #af7cf2;
            padding: 0.8rem 2.3rem;
            border-radius: 20px;
            color: #fff;
        }
        .ser-feed-1 {
            img {
                width: 100%;
                border-radius: 50px;
            }
        }
        .ser-feed-2 {
            margin-top: 6rem;
            padding-left: 8rem;
        }
    }

    @media screen and (max-width: 768px) {
        .S-div-3 {
            text-align: center;
        }
        .S-div-3 .ser-feed-1 img {
            width: 70%!important;
        }
        .S-div-3 .ser-feed-2 {
            padding-left: 0;
        }
    }
    
    @media screen and (max-width: 375px) {
        .ui/ux {
            margin-top: 0!important;
        }
        .salemart {
            marigin-top: 2rem;
        }
    }
`

function Services() {
  return (
    <Style>
        <div>
        <div className='container S-div-1'>
            <h6>WHAT WE DO</h6>
            <h3>We Provide Best <br/>
            <span>Solution</span> For You.
            </h3>
        </div>
        <div className='S-div-2 container'>
            <div className='row'>
                <div className='col-lg-4 salemart'>
                    <h4>Sales Marketing</h4>
                    <p>It is a long established fact that a <br/> 
                    reader will be distracted by the.
                    </p>
                </div>
                <div className='col-lg-4 mt-5 ui/ux'>
                    <h4>UI/UX Design</h4>
                    <p>It is a long established fact that a <br/> 
                    reader will be distracted by the.
                    </p>
                </div>
                <div className='col-lg-4'>
                    <h4>Web Development</h4>
                    <p>It is a long established fact that a <br/> 
                    reader will be distracted by the.
                    </p>
                </div>
            </div>
        </div>
        <div className='S-div-3 container pt-5'>
            <div className='row'>
                <div className='col-lg-6 ser-feed-1'>
                    <img src={four} alt=''/>
                </div>
                <div className='col-lg-6 ser-feed-2 '>
                    <h6>WHO WE ARE</h6>
                    <h3>We are Creative <br/> 
                    Since <span>2005</span>
                    </h3>
                    <p>it is a long established fact that a reader will be <br/> 
                    distracted by the readable content of a page when <br/>
                     looking at its layout.
                    </p>
                    <button className='l-btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
    </Style>
  )
}

export default Services