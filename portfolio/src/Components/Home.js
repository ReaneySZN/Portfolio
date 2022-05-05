import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Author from '../Images/laptop.png';
import Services from './Services';
import social4 from '../Images/social-1.png';
import social2 from '../Images/social-2.png';
import social3 from '../Images/social-3.png';
import social1 from '../Images/social-4.png';
import About from './About';


const Style = styled.div `
  background-color: #23263AFA;
  .laptop-img img {
      width: 100%;
      height: 100vh;
      padding-top: 2rem;
  }
  .Admin {
      color: #fff;
      margin-top: 10rem;
      text-align: left;
  }
  h2 {
      font-weight: 700;
      font-size: 2.5rem;
  }
  p {
      font-weight: 0;
      font-size: .9rem;
  }
  button {
      background: transparent;
      border-radius: 10px;
      border: 1px solid #F12F2FF0;
      color: #fff;
      padding:.1rem 1rem;
  }
  .social-icons {
      display: flex;
      padding-bottom: 3rem;

      .medias-1 {
          width: 100%;
      }
      .medias-2 {
        width: 100%;
    }
    .medias-3 {
        width: 100%;
    }
    .medias-4 {
        width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
      .laptop-img img {
          height: 50vh;
      }
    br {
        display: none;
    }
  }
  @media screen and (max-width: 375px) {
      height: 100vh;
      
      .Admin {
          text-align: center;
          margin-top: 2rem;
      }
      br {
          display: none;
      }
  }
`

function Home() {
  return (
    <Style>
    <div>
    <Navigation/>
    <div className='container'>
        <div className='row'>
            <div className='col lg-6'>
            <div className='Admin'>
               <div className='social-icons'>
               <div className='social-img-1'>
                    <img src={social1} alt='' className='medias-1'/>
                </div>
                <div className='social-img-2'>
                    <img src={social2} alt='' className='medias-2'/>
                </div>
                <div className='social-img-3'>
                    <img src={social3} alt='' className='medias-3'/>
                </div>
                <div className='social-img-4'>
                    <img src={social4} alt='' className='medias-4'/>
                </div>
               </div>
                <div className='home-text'>
                <h2>Hello, I am<br/> Emmanuel David</h2>
                <p>i'm Emmanuel, professional web/visual designer specializing in branding<br/> design &
                     UI/UX with elegant development and stylish<br/> output in this field</p>
                
                    <button className='portfolio-btn'>My Portfolio</button>
                </div>
            </div>
            </div>
            <div className='col lg-6'>
                <div className='laptop-img'>
                    <img src={Author} alt=''/>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Services/>
    <About/>
    </Style>
  )
}

export default Home