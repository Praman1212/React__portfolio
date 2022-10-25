import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActive] = useState('#')
  return (
    <nav id='home'>
      <a href="#" onClick={()=> setActive('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActive('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav