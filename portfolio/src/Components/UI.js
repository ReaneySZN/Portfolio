import React from 'react'
import styled from 'styled-components'
import Mainpage from './Mainpage'
import Sidebar from './Sidebar'
import Sidepage from './Sidepage'

const Style = styled.div`
min-height: 200vh;
width: 100%;
padding: 2rem 2rem;
`

function UI() {
  return (
    <Style>
        <div>
        <div className=''>
            <div className='row'>
                <div className='col-lg-2'>
                    <Sidebar/>
                </div>
                <div className='col-lg-7'>
                    <Mainpage/>
                </div>
                <div className='col-lg-3'>
                    <Sidepage/>
                </div>
            </div>
        </div>
    </div>
    </Style>
  )
}

export default UI