import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mes.png'
import HeaderSocial from './HeaderSocial'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Praman Ghimire</h1>
        <h5 className='text-light'>React Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" className='image__me' />
        </div>

        <a href="#contact" className='scroll__name'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header

