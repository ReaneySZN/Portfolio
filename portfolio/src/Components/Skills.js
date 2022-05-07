import React from 'react'
import styled from 'styled-components'
import {SiBootstrap} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'

const Style = styled.div`
    background-color: #23263AFA;
     min-height: 100vh;
     padding: 5rem 0;
     .heading {
        font-size: 3rem;
        color: red;
        font-weight: 700;
        padding-bottom: 5rem;
     }
     p {
         color: #fff !important;
         font-size: 2rem !important;
         font-weight: 700 !important;
     }
     .skills {
        html-icon {
            font-size: 3.5rem ;
            color: red ;
            width: 50%;
        }
        css-icon {
           font-size: 3.5rem !important;
           color: #fff !important;
        }
        js-icon {
           font-size: 3rem !important;
           color: #fff !important;
        }
        react-icon {
           font-size: 3rem !important;
           color: #fff !important;
        }
        bs-icon {
           font-size: 3rem !important;
           color: #fff !important;
        }
     }

     @media screen and (max-width: 768px) {
         min-height: 60vh;
     }

     @media screen and (max-width: 375px) {
         p {
             padding: 1rem;
         }
     }
`

function Skills() {
  return (
      <Style>
          <div>
        <h1 className='heading'>Skills</h1>
        <div className='container skills'>
            <div className='row'>
                <div className='col-lg-6'>
                    <p>HTML</p>
                </div>
                <div className='col-lg-6 html-icon'>
                    <AiFillHtml5 size={30} color={'white'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <p>CSS</p>
                </div>
                <div className='col-lg-6 css-icon'>
                    <DiCss3 size={30} color={'white'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <p>JavaScript</p>
                </div>
                <div className='col-lg-6 js-icon'>
                    <SiJavascript size={20} color={'white'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <p>React</p>
                </div>
                <div className='col-lg-6 react-icon'>
                    <GrReactjs size={25} color={'white'}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <p>BootStrap</p>
                </div>
                <div className='col-lg-6 bs-icon'>
                    <SiBootstrap size={25} color={'white'}/>
                </div>
            </div>
        </div>
        </div>
      </Style>
  )
}

export default Skills