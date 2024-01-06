import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.scss'
// import logo from './logo.svg'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
  const imgref = useRef(null);


  useEffect(() => {

    const element = imgref.current;
    gsap.to('.text0', {
      x: '20%', rotate: 10, duration: 0.85, scrollTrigger: {
        trigger: '.text0',
        scrub: true,
        start: 'top 10%'
      }
    })
    gsap.to('.text2', {
      x: '20%', rotate: 10, duration: 0.85, scrollTrigger: {
        trigger: '.text2',
        scrub: true,
        start: 'top 10%'
      }
    })
    gsap.to('.text1', {
      x: '-20%', rotate: -10, duration: 0.85, scrollTrigger: {
        trigger: '.text1',
        scrub: true,
        start: 'top 30%'
      }
    })
    gsap.to('.text3', {
      x: '-20%', rotate: -10, duration: 0.85, scrollTrigger: {
        trigger: '.text3',
        scrub: true,
        start: 'top 30%'
      }
    })


  }, [])

  return (
    <>

      <div className="wrapper" >
        <div id="text" ref={imgref} className="text0">looking for  front end developer?</div>
        <div id="text" ref={imgref} className="text1">looking for front end developer?</div>
        <div id="text" ref={imgref} className="text2">looking for front end developer?</div>
        <div id="text" ref={imgref} className="text3">looking for front end developer?</div>
      </div>


    </>
  )
}

export default Home




