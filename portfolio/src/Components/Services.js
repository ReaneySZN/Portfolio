import React from 'react';
import styled from 'styled-components';
import github from '../Images/github.png';

const Style = styled.div`
   background: #1F2235;
   height: 100vh;
   padding: 6rem 0rem;
   h3, h5, p {
     color: #FFF;
   }
   h6 {
     color: red;
   }
   .columns {
     background: #23263AFA;
     border-radius: 10px;
     text-align: left;
     padding: 2rem 4rem;
     margin-top: 1.5rem;
     h5 {
       padding: 1rem 0;
     }
   }
   .github-img img {
     width: 25%;
     height: 10vh;
   }

   @media screen and (max-width: 768px) {
     height: 85vh;
     br {
     display: none;
   }
   .github-img img {
     width: 50%;
     height: 6vh;
   }
   }

   @media screen and (max-width: 375px) {
     height: 100vh;
     padding: 2rem 1rem;
     
     .github-img img {
      width: 30%;
      height: 6vh;
  }
    .columns {
      background: #23263AFA;
      border-radius: 10px;
      text-align: center;
      padding: 0;
      margin-top: 0;
   }
   
`

function Services() {
  return (
    <Style>
    <div className='Serv'>
        <h6>SERVICES</h6>
        <h3>My Service</h3>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum standard dummy text.</p>
        <div className='container'>
          <div className='row'>
            <div className='col lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
            <div className='col lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
            <div className='col lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
          </div>
          <div className='row'>
          <div className='col lg-4'>
           <div className='columns'>
             <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
            <div className='col lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
            <div className='col lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
              <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
            </div>
            </div>
          </div>
        </div>
    </div>
    </Style>
  )
}

export default Services