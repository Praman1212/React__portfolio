import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>
      <h5>
        What Skills I Have
      </h5>
      <h2>My Expericence</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
             <div>
             <h4>Laravel</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
             <div>
             <h4>Mysql</h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>

            <article className='experience___details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience