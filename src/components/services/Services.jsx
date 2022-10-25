import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start of UI/UX design */}
        <article className='service'>
        <div className="service__head">
          <h3>
            UI/UX Design
          </h3>


          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            
          </ul>
        </div>
        </article>
        {/* End od UI/UX design */}
        {/* Start of Web Development */}
        <article className='service'>
        <div className="service__head">
          <h3>
            Wed Development
          </h3>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            
          </ul>
        </div>
        </article>
        {/* End of Wed Development */}
        {/* Chess Tutor */}
        <article className='service'>
        <div className="service__head">
          <h3>
            Chess Tutor
          </h3>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            
          </ul>
        </div>
        </article>
        {/* End of chess Tutor */}
      </div>
    </section>
  )
}

export default Services