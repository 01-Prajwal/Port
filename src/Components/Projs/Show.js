import React, { useState } from 'react'
import './show.scss'
import { data } from '../data'
import { data2 } from '../data'
import { data3 } from '../data'
const Show = () => {
  const [people, setPeople] = useState(data);
  const [p, setP] = useState(data2);
  const [p1, setP1] = useState(data3);
  return (
    <div className='show'>
<div class="wave1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
      {/* <h2>Projects</h2> */}
      <div className="showcase">
        <div className="cone">
          {
            people.map((person) => {
              const { image, name, tech ,live,code} = person;

              return (
                <figure className='fig'>
                  <img src={image} alt="" />
                  {/* <h4>{name}</h4> */}
                  <figcaption>
                    <h3>{name}</h3>
                    <p>
                      <h4>tech used</h4>
                      <ul>
                        <li>{tech[0]}</li>
                        <li>{tech[1]}</li>
                        <li>{tech[2]}</li>
                      </ul>
                    </p>
                    <section>

                    <a href={live} target="_blank" className='read-more'>Go Live</a>
                    <a href={code} target="_blank" className='read-more'>Code</a>
                    </section>
                  </figcaption>
                </figure>
              );
            })
          }

        </div>
        <div className="cone">
          {
            p.map((person) => {
              const { image, name, tech,live,code } = person;

              return (
                <figure className='fig'>
                  <img src={image} alt="" />
                  {/* <h4>{name}</h4> */}
                  <figcaption>
                    <h3>{name}</h3>
                    <p>
                      <h4>tech used</h4>
                      <ul>
                        <li>{tech[0]}</li>
                        <li>{tech[1]}</li>
                        <li>{tech[2]}</li>
                      </ul>
                    </p>
                    <section>

                    <a href={live} target="_blank" className='read-more'>Go Live</a>
                    <a href={code} target="_blank" className='read-more'>Code</a>
                    </section>
                  </figcaption>
                </figure>
              );
            })
          }

        </div>
        <div className="cone">
          {
            p1.map((person) => {
              const { image, name, tech ,live,code} = person;

              return (
                <figure className='fig'>
                  <img src={image} alt="" />
                  {/* <h4>{name}</h4> */}
                  <figcaption>
                    <h3>{name}</h3>
                    <p>
                      <h4>tech used</h4>
                      <ul>
                        <li>{tech[0]}</li>
                        <li>{tech[1]}</li>
                        <li>{tech[2]}</li>
                      </ul>
                    </p>
                    <section>

                    <a href={live} target="_blank" className='read-more'>Go Live</a>
                    <a href={code} target="_blank" className='read-more'>Code</a>
                    </section>
                  </figcaption>
                </figure>
              );
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Show