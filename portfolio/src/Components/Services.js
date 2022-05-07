import React from 'react';
import styled from 'styled-components';
import github from '../Images/github.png';

const Style = styled.div`
   background: #1F2235;
   min-height: 100vh;
   padding: 5rem 0;
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
       padding: 1rem ;
     }
   }
   .github-img {
     padding-left: 1rem;
      img {
        width: 20%;
      }
   } 
  

   @media screen and (max-width: 768px) {
     br {
     display: none;
   }
   .github-img img {
    //  width: 50%;
   }
   .columns{
     text-align: center;
   }
   }

   @media screen and (max-width: 375px) {
     padding: 3rem;
     
     .github-img img {
       width: 12%;
  }
    .columns {
      background: #23263AFA;
      border-radius: 10px;
      text-align: center;
      padding: 1rem 0;
      margin-top: 1rem;
   }

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
            <div className='col-lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
            </div>
            </div>
            <div className='col-lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
             </div>
            </div>
            <div className='col-lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
             </div>
            </div>
          </div>
          <div className='row'>
          <div className='col-lg-4'>
           <div className='columns'>
             <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
             </div>
            </div>
            <div className='col-lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
             </div>
            </div>
            <div className='col-lg-4'>
           <div className='columns'>
           <div className='github-img'>
               <img src={github} alt=''/>
             </div>
             <div className='web-para'>
               <h5>Web Development</h5>
              <p>Lorem ipsum is simply dummy<br/> text of the printing and typesetting<br/> industry lorem ipsum standard dummy text.</p>
             </div>
             </div>
            </div>
          </div>
        </div>
    </div>
    </Style>
  )
}

export default Services