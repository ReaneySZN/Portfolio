import React from 'react'
import styled from 'styled-components'
import five from '../Images/pic5.jpg'
import six from '../Images/pic6.jpg'
import seven from '../Images/pic7.jpg'
import eight from '../Images/pic8.jpg'
import nine from '../Images/pic9.jpg'
import ten from '../Images/pic10.jpg'
import eleven from '../Images/pic11.jpg'

const Style = styled.div`
    padding: 5rem 0;

    img {
        width: 60%;
        border-radius: 100px;
    }
    .five, .ten, .parag {
        padding: 5rem 0
    }
    .parag {
        background: #f9f6ff;
        border-radius: 50%;
        color: #af7cf2;
        height: 30vh;
        font-weight: 700;
        width: 60%;
        margin: 0 auto;
    }

    .P-div-2 {
        padding: 3rem 0;
        .P-feed-1 {
            text-align: left; 
        }
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
        .l-btn {
            background: #af7cf2;
            padding: 0.8rem 2.3rem;
            border-radius: 20px;
            color: #fff;
        }
        .rounded {
            border-radius: 10px!important
        }
        h5 {
            font-weight: 700;
        }
        .pr-img-1 img {
            width: 80%;
            border-radius: 100px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            width: 30%;
        }
        .parag {
            width: 30%;
            margin: 2rem auto;
            height: auto;
        }
        .P-div-2 .P-feed-1 {
            text-align: center;
        }
        .stats {
            justify-content: center;
            text-align: left;
        }
        .P-div-2 .pr-img-1 img {
            width: 60%;
        }
    }

    @media screen and (max-width: 375px) {
        .parag {
            width: 60%;
        }
        .stats {
            text-align: left;
        }
    }

`

function Project() {
  return (
    <Style>
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 five'>
                        <img src={five} alt=''/>
                    </div>
                    <div className='col-lg-2'>
                        <div className='d-flex flex-column'>
                        <div className=''>
                        <img src={six} alt=''/>
                        </div>
                        <div className=''>
                        <img src={seven} alt=''/>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                    <p className='parag'>it is a long established fact that <br/>  
                    a reader will be distracted by the <br/>  
                    readable content of a page when <br/>
                     looking at its layout.
                    </p>
                    </div>
                    <div className='col-lg-2'>
                    <div className='d-flex flex-column'>
                        <div className=''>
                        <img src={eight} alt=''/>
                        </div>
                        <div className=''>
                        <img src={nine} alt=''/>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-2 ten'>
                    <img src={ten} alt=''/>
                    </div>
                </div>
            </div>
            <div className='P-div-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 P-feed-1'>
                                <h6>HOW CAN WE HELP</h6>
                                <h3 className='py-4'>We Help to Create your <br/> 
                                <span>Business</span> Change
                                </h3>
                                <p>
                                it is a long established fact that a reader will be <br/> 
                                distracted by the readable content of a page when <br/>
                                looking at its layout.
                                </p>
                                <button className='l-btn'>Let's Started</button>
                                <div className='stats d-flex mt-5'>
                                <div class="stats-1 shadow p-3 mb-5 me-5 bg-white rounded">
                                        <h5>800</h5>
                                        <p className='text-muted'>
                                            Complete Project
                                        </p>
                                    </div>
                                    <div class="stats-2 shadow p-3 pe-5 mb-5 bg-white rounded">
                                            <h5>300</h5>
                                        <p className='text-muted'>
                                            Happy Clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 pr-img-1'>
                                <img src={eleven} alt=''/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </Style>
  )
}

export default Project