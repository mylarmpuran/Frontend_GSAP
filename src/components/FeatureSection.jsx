import React from 'react'
import { features } from '../constants'
import { useGSAP } from '@gsap/react';

function FeatureSection() {

    gsap.registerPlugin(ScrollTrigger)

    function GSAP() {
        const green = useRef();
        const purpule = useRef();
        const blue = useRef();
        useGSAP(() => {
            // Refs allow you to access DOM nodes
            // console.log(green)

            // then we can animate them like so..
            gsap.to(green.current, { rotation: 360, x: 100, duration: 1 });
            gsap.from(purpule.current, { rotation: -360, x: -100, duration: 5 });
            gsap.fromTo(blue.current, { x: -100 }, { rotation: 360, x: 100, duration: 10 });

            let split = SplitText.create(".split", { type: "words, chars" });

            gsap.from(split.chars, {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: 0.05
            })

        });

    }

        
        return (
            <div className='relative mt-20 broder-b border-neutral-800 min-h-[800px]'>
                <div className='text-center'>
                    <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                        Feature
                    </span>
                    <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide'>
                        Easily build
                        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                            {" "}your code
                        </span>
                    </h2>
                </div>
                <div className='flex flex-wrap mt-10 lg:mt-20'>
                    {features.map((feature, index) => (
                        <div key={index} className='w-full sm:1/2 lg:w-1/3'>
                            <div className='flex'>
                                <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900
                        text-orange-700 justify-center items-center rounded-full'>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className='mt-1 mb-6 text-xl '>{feature.text}</h5>
                                    <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        )
    }

    export default FeatureSection
