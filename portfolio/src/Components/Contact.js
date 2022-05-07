import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    background: #1F2235;
    min-height: 100vh;
    .form-group {
        display: flex;
        flex-direction: column;
    }
    label {
        color: #fff;
        text-align: left;
    }
    .rounded {
        border-radius: 20px !important;
    }
    .bg-body {
        background: #23263AFA !important;
    }
    input {
        outline: none;
        border: none;
    }
    textarea {
        height: 20vh;
    }
`

function Contact() {
  return (
    <Style>
        <div>
            <h1>Contact</h1>
            <div className='container'>
            <div class="shadow p-3 mb-5 bg-body rounded">
                <div className='form-group'>
                    <label for='name'>Name</label>
                    <input name='name' type='text' className='py-1 px-1'/>
                </div>
                <div className='form-group '>
                <label for='email'>Email</label>
                    <input name='email' type='email'  className='py-1 px-1'/>
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