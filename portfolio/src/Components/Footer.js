import React from 'react';
import styled from 'styled-components';
import backgroundlogo from '../Images/3dbackground.png';
import logo from '../Images/Emmalogo.png';


const Style = styled.div`
    padding: 5rem 2rem 0rem 2rem;
    background: #1F2235;
    width: 100%;
    min-height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${backgroundlogo});
    
    .footer-div {
        
        display: flex;
        justify-content: space-between;
    }
    .footer-logo img {
        width: 100%;
    }
    h2 {
        padding-bottom: 1rem;
    }
    p {
        font-size: 1rem !important;
        font-weight: 100 !important;
    }
    .hire-div {
        h2 {
            color: red;
            padding-left: 3rem;
            text-align: center;
        }
    }
    .quick-div {
        h2 {
            color: red;
            text-align: center;
        }
        a {
            color: #fff;
            text-align: center;
            font-size: 1.2rem;
        }
    }
    .hire-btn {
        font-size: 1.2rem;
        padding: .6rem 1rem;
        border-radius: 20px;
        margin: 0;
    }
    .social-div {
        h2 {
            color: red;
            text-align: center;
        }
        a {
            color: #fff;
            text-align: center;
            font-size: 1.2rem;
        }
    }
    .horizon {
        p{
            color: #fff;
        }
        
    }
   
    @media screen and (max-width: 375px) {
        padding: 4rem 1rem 0rem 1rem;
        ul {
            padding: 1rem;
            a {
                font-size: 1rem !important;
            }
            h2 {
                font-size: 1.4rem;
            }
        }
        .hire-btn {
            font-size: 1rem;
        }
        .hire-div h2 {
            font-size: 1.4rem;
        }
        .hire-div {
            padding: 1rem;
        }
    }
`;


function Footer() {
  return (
      <Style>
    <div>
        <div className='container footer-div'>
            <div className='col-lg-3 footer-logo'>
                <img src={logo} alt=''/>
            </div>
                <div className='col-lg-3 quick-div'>
               <ul>
               <h2>Quick Links</h2>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Service</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
                </ul>
                </div>
        
                <div className='col-lg-3 social-div'>
                <ul>
                    <h2>Social Links</h2>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>LinkedIn</a></li>
                <li><a href='#'>Github</a></li>
                </ul>
                </div>
                <div className='col-lg-3 hire-div'>
                    <h2>Hire us</h2>
                    <button className='hire-btn'>Hire now</button>
               </div>
           
        </div> 
        <div className='horizon'>
            <hr/>
             <p>© 2022 EMMAWEB All rights reserved.</p>
        </div>
    </div>
    </Style>
  )
}

export default Footer