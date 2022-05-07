import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Author from '../Images/laptop.png';
import Services from './Services';
import About from './About';
import Footer from './Footer';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BsGithub} from 'react-icons/bs';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';


const Style = styled.div `
  background-color: #23263AFA;
  min-height: 100vh;
  .laptop-img img {
      width: 100%;
  }
  .Admin {
      color: #fff;
      margin-top: 10rem;
      text-align: left;
  }
  h2 {
      font-weight: 700;
      font-size: 2.5rem;
      text-align: left;
      padding: 0 1rem;
  }
  p {
      font-weight: 0;
      font-size: .9rem;
      padding: 0 1rem;
  }
  button {
      background: transparent;
      border-radius: 10px;
      border: 1px solid #F12F2FF0;
      color: #fff;
      padding: 0rem .5rem;
      margin-left: 1rem;
  }
  .social-icons {
      display: flex;
      padding-bottom: 2rem;
      padding-left: 1rem;
      .facebook-icons {
          padding-right: 4rem;
          color: red;
      }
      .twitter-icons {
          padding-right: 4rem;
          color: red;
      }
      .email-icons {
          padding-right: 4rem;
          color: red;
      }
      .instagram-icons {
        padding-right: 4rem;
        color: red;
      }
  }

  @media screen and (max-width: 768px) {
    br {
        display: none;
    }
    .social-icons {
        padding: 2rem 6rem;
    }
    .home-text {
        padding: 0 5rem;
    }
    .facebook-icons {
        font-size: 1.3rem;
    }
    .twitter-icons {
        font-size: 1.3rem;
    }
    .email-icons {
        font-size: 1.3rem;
    }
    .instagram-icons {
        font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 375px) {
      .Admin {
          text-align: center;
          margin-top: 2rem;
      }
      br {
          display: none;
      }
      .laptop-img img {
        width: 90%;
   }
   .home-text {
       text-align: center;
       h2 {
           text-align: center;
       }
   }
   .social-icons {
    padding: 2rem 3rem;
    justify-content: center;
    margin-left: 2rem;
    .facebook-icons {
        padding-right: 2rem;
        color: red;
    }
    .twitter-icons {
        padding-right: 2rem;
        color: red;
    }
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
            <div className='col-lg-6'>
            <div className='Admin'>
               <div className='social-icons'>
                <div className='facebook-icons'>
                    <FaFacebookF/>
                </div>
                <div className='twitter-icons'>
                    <BsTwitter/>
                </div>
                <div className='twitter-icons'>
                    <BsInstagram/>
                </div>
                <div className='twitter-icons'>
                    <MdEmail/>   
                </div>
                <div className='twitter-icons'>
                    <BsGithub/>   
                </div>
                
               </div>
                <div className='home-text'>
                <h2>Hello, I am<br/> Emmanuel David</h2>
                <p>i'm Emmanuel, professional web/visual designer specializing in<br/> branding design &
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
    <Skills/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    <About/>
    <Footer/>
    </Style>
  )
}

export default Home