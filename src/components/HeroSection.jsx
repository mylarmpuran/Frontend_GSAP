import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/all";
import video1 from "../assets/video1.mp4";
import video2 from '../assets/video2.mp4';


gsap.registerPlugin(useGSAP, SplitText)

function HeroSection() {


  useGSAP( () => {
    let split = SplitText.create(".virtual", {
      type: "lines",
      autoSplit: true,
      deepSlice: true,
      onSplit: (self) => {
         gsap.from(self.lines, {
          duration: 2,
          y:-200,
          autoAlpha: 0,
          stagger: 0.05
        });
      }
    })

    let splitEmpower = SplitText.create( ".empower", {
      type: "lines",
      autoSplit: true,
      deepSlice: true,
      onSplit: (self) => {
         gsap.from(self.lines, {
          duration: 2,
          y:100,
          autoAlpha: 0,
          stagger: 0.1
        });
      }
    })

    gsap.from([".video1"],{opacity:0, x:-800, duration:3, delay:2,ease: "power3.out"})
    gsap.from([".video2"],{opacity:0, x:800, duration:3, delay:2,ease: "power3.out"})
    gsap.from(".btfree",{opacity:0, y:100, duration:3, delay:2,ease: "power3.out"})
    gsap.from(".btdoc",{opacity:0, y:100, duration:3, delay:2,ease: "power3.out"})


  }
  
  
  )
  return (
    <div className='flex flex-col items-center mt-2 lg:mt-20 '>
        <h1 className='virtual text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build tools 
            <span className='virtual bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {" "}
            for developers
            </span>
        </h1>
      <p className='empower mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Empower your creativity and bring your VR app ideas to life with out
        intuitive development tools. Get started today and turn your imagination into 
        immersive reality!
      </p>
      <div className='flex justify-center my-10'>
        <a
        href="#"
        className='btfree bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'
        >
            Start for free
        </a>
        <a href="#" className='btdoc py-3 px-4 mx-3 rounded-md border'>
            Documentation
        </a>
        </div>  

        <div className='flex mt-10 justify-center'>
            <video
            autoPlay
            loop
            muted
            className='video1 rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
            autoPlay
            loop
            muted
            className='video2 rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    </div>
  )
}

export default HeroSection
