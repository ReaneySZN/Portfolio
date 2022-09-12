import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import creative from '../Images/pic2.jpg'
import rating from '../Images/pic3.jpg'
import board from '../Images/pic.jpg'

const Style = styled.div `
    background: #f9f6ff;
    padding: 1rem 0;

    .h-feed-1 {
        text-align: left;

        h2 {
            font-size: 3rem;
            font-weight: 700;
        }
    }
    .outer {
        background: #af7cf2;
        padding: .8rem 2.3rem;
        border-radius: 20px;
        margin: 2rem 0;
        color: #fff;
   
        a {
          color: #fff !important;
          outline: none;
          border: none;
        }
        .r-img {
         img {
            width: 100%;
          }
        }
     }

     @media screen and (max-width: 768px) {
        .h-feed-1 {
            text-align: center;
            padding: 2rem 0;
        }
        .h-img-2 {
            width: 70%!important;
        }
        .btnrat {
            padding: 0 9rem;
        }
     }

     @media screen and (max-width: 375px) {
        .c-img img {
            width: 70%;
        }
        .btnrat {
            padding: 0 2rem;
        }
     }
`

function Home() {
  return (
    <Style>
        <div>
        <div className='container'>
        <Navigation/>
        <div className='row d-flex align-items-center'>
            <div className='col-lg-6 h-feed-1'>
                <div className=''>
                <h2>We Are</h2>
                <div className='c-img'>
                    <img src={creative} alt/>
                </div>
                <h6>It is a long established fact that a reader will be distracted by the <br/>
                readable content of a page when looking at its layout.</h6>
                </div>
                <div className="d-flex justify-content-between btnrat">
                    <button className='outer'>Get Started</button>
                    <div className='r-img'>
                        <img src={rating} alt/>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <img src={board} alt className='w-100 h-img-2'/>
            </div>
        </div>
        </div>
    </div>
    </Style>
  )
}

export default Home