import React from 'react'
import styled from 'styled-components'
import {Form, Button, InputGroup} from 'react-bootstrap'

const Style = styled.div`
    padding: 3rem 0;

    .C-div-1 {
        background: #af7cf2;
        padding: 4rem 0rem;
        width: 80%;
        border-radius: 20px;

        .input-group {
            width: 50%;
            margin: 0 auto;

            .btn {
                background: #fff;
                color: #000;
                font-weight: 700;
                border: none;
                margin-left: 0.5rem;
                border-radius: 6px;
            }
            .form-control {
                background: #e9ecef82;
                border: none;
                border-radius: 6px;
            }
        }
        h2, h6 {
            font-weight: 700;
            color: #fff;
        }
        h6 {
            padding: 1.5rem 0;
        }
    }
    .C-div-2 {
        padding: 3rem 0 0 0;
        text-align: left;

        ul {
            list-style: none;
        }
        h3 {
            font-weight: 700;
        }
        h4 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-left: 1.5rem;
        }
        .input-group {
            width: 35%;
        }
        .input-group>.btn {
            color: #fff;
            background: #af7cf2;
            border: none;
        } 
    }

    @media screen and (max-width: 768px) {
        .C-div-2 {
            text-align: center;
        }
        .C-div-2 .input-group {
            width: 70%;
            margin: 0 auto;
        }
        .social-feed {
            flex-direction: column!important;
        }
    }

    @media screen and (max-width: 375px) {
        .C-div-1 .input-group {
            width: 100%;
        }
        .social-feed {
            flex-direction: column;
        }
        .C-div-2 .input-group {
            width: 100%;
        }
    }
`

function Contact() {
  return (
    <Style>
        <div className=''>
            <div className='C-div-1 container'>
                <h2>Have any Question on Mind</h2>
                <h6>Let's Talk About your Business and Projects.</h6>
                <InputGroup className="mb-3 px-5">
                        <Form.Control
                        placeholder="Your Email"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Let's Talk
                        </Button>
                </InputGroup>
            </div>
            <div className='C-div-2'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-lg-4'>
                        <h3>Agency</h3>
                        <p>
                            it is a long established fact that a reader will <br/> be  
                            distracted by the readable content of a <br/> page when 
                            looking at its layout.
                        </p>
                    </div>
                    <div className='col-lg-2'>
                        <h4>Company</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Project</li>
                        </ul>
                    </div>
                    <div className='col-lg-2'>
                        <h4>Support</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>FAQs</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className='col-lg-4'>
                        <h4>Contact</h4>
                        <ul>
                            <li><span className='text-muted'>Phone:</span> +1(453) 0245 0254</li>
                            <li><span className='text-muted'>Email:</span> uixzone@gmail.com</li>
                            <li><span className='text-muted'>Office:</span> Los Angeles, 54262, New York</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between container py-3 social-feed'>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>Instagram</p>
                    <InputGroup className="mb-3 px-5">
                            <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                </div>
                <div className='container '>
                <p>Copyright 2022 <span className='text-muted'>uixzone.</span>All Right Reserved</p>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Contact