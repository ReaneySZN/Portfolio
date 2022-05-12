import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    background: #1F2235;
    min-height: 60vh;
    padding: 5rem 0;
    .form-group {
        display: flex;
        flex-direction: column;
    }
    label {
        color: #fff;
        text-align: left;
    }
    .rounded {
        border-radius: 10px !important;
        height: 45vh;
        margin: 0 auto;
    }
    .bg-body {
        background: #23263AFA !important;
        width: 45%;
    }
    input {
        outline: none;
        border: #000 2px solid;
        padding: .5rem 0rem;
        border-radius: 7px;
    }
    textarea {
        height: 20vh;
        outline: none;
        border: #000 2px solid;
        border-radius: 7px;
    }
    .port-h {
        font-size: 3rem;
        color: red;
        font-weight: 700;
        padding-bottom: 5rem;
    }

    @media screen and (max-width: 768px){
        .bg-body {
            width: 80%;
        }
        .rounded {
            height: 43vh;
        }
    }
`

function Contact() {
  return (
    <Style>
        <div id='#Contact'>
            <h1 className='port-h'>Contact</h1>
            <div className='container'>
            <div class="shadow p-3 mb-5 bg-body rounded">
                <div className='form-group'>
                    <label for='name'>Name</label>
                    <input name='name' type='text' className=''/>
                </div>
                <div className='form-group '>
                <label for='email'>Email</label>
                    <input name='email' type='email'  className=''/>
                </div>
                <div className='form-group'>
                <label for='message'>Message</label>
                    <textarea name='message' type='text'/>
                </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Contact