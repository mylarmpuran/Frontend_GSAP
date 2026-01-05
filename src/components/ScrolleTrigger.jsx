import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";




import user1 from "../assets/profile-pictures/user1.jpg"
import user2 from "../assets/profile-pictures/user2.jpg"
import user3 from "../assets/profile-pictures/user3.jpg"
import user4 from "../assets/profile-pictures/user4.jpg"
import user5 from "../assets/profile-pictures/user5.jpg"
import user6 from "../assets/profile-pictures/user6.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function ScrolleTrigger() {

    useGSAP(() => {
        let sections = gsap.utils.toArray(".picture")
        console.log(sections)

        gsap.to(sections, {
            scrollTrigger: {
                trigger: '.picture',
                start: 'top center',
                ease: 'power1.inOut',
                // end: 'bottom 50%+=100px',
                scrub: 1,
                toggleActions: "restart pause reverse pause",
                // onToggle: (self) => console.log('toggled, isActive:', self.isActive),
                // onUpdate: (self) => {
                //     console.log(
                //         'progress:',
                //         self.progress.toFixed(3),
                //         'direction:',
                //         self.direction,
                //         'velocity',
                //         self.getVelocity())
                // }
            },
            x: 500,
            duration: 3,


        })

    })



    return (
        <div className='container border border-blue-500 flex flex-col'>
            <img className='picture h-96 w-96 border border-red-500' src={user1} alt="no image" />
            <img className='picture h-96 w-96 border border-red-500' src={user2} alt="no image" />
            <img className='picture h-96 w-96 border border-red-500' src={user3} alt="no image" />
            <img className='picture h-96 w-96 border border-red-500' src={user4} alt="no image" />
            <img className='picture h-96 w-96 border border-red-500' src={user5} alt="no image" />
            <img className='picture h-96 w-96 border border-red-500' src={user6} alt="no image" />
        </div>
    );
}
