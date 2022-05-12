import React from 'react';
import styled from 'styled-components';
import admin from '../Images/Admin.png';

const Style = styled.div`
     background-color: #23263AFA;
     min-height: 100vh;
     padding: 6rem 0;
     h1, h2, h4, p {
         color: white;
     }
     h1, h2 {
         font-weight: 700;
     }
     h2 {
         text-align: left;
     }
     .subline {
         text-align: center;
     }
     .info {
         display: flex;
         justify-content: space-between;
         text-align: left;
         h4 {
             color: red;
             padding-left: 1rem;
         }
     }
     .dummypara {
         text-align: left;
     }
     .padd {
         padding-top: 5rem;
     }
     .admin-img img {
         width: 100%;
     }
     .admin-deta {
         padding-top: 5rem; 
     }
     @media screen and (max-width: 768px) {
         padding: 5rem 10rem;
         .admin-img img {
             width: 100%; 
           }
  }

     @media screen and (max-width: 375px) {
        padding: 3rem 1rem;

         .admin-deta {
             padding-top: 0;
         }
         .admin-img {
             height: 30vh;
         }
         .admin-img img {
              width: 60%;
         }
         br {
             display: none;
         }
         .info h4 {
            padding-left: 1rem;
         }
     }
`

function About() {
  return (
      <Style>
    <div id='#About'>
        <h1>About Me</h1>
        <p className='subline'>Lorem ipsum is simply dummy text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
        <div className='container'>
            <div className='row padd'>
                <div className='col-lg-6'>
                    <div className='admin-img'>
                        <img src={admin} alt=''/>
                    </div>
                </div>
                <div className='col lg-6 admin-deta'>
                    <h2>Hi There</h2>
                    <p className='dummypara'>in kd mulia magna nuliham podlums fermentnitum muttis. Nuno id dul at sopien<br/>
                     faucibuns fermentnitum ut voi doum. Nullum tempuil rumi id effitur sungba urmo<br/> est ultrious orbe oc potro dorm turpio
                        <br/>
                        <br/>
                        numc id effitur sagnis lamg ost ultrious orgo oc potro som turpis porta som turds quis loe. Nullo in founght edd
                    </p>
                    <div className='info'>
                        <div className='flex-1'>
                        <h4>Name:</h4>
                        <p>Emmanuel David</p>
                        <h4>Phone:</h4>
                        <p>Emmanuel David</p>
                        </div>
                        <div className='flex-2'>
                        <h4>Email:</h4>
                        <p>Emmanuel David</p>
                        <h4>Twitter:</h4>
                        <p>Emmanuel David</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Style>
  )
}

export default About