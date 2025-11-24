import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

function GSAP()  {
    const green = useRef();
    const purpule = useRef();
    const blue = useRef();
    useGSAP(() => {
            // Refs allow you to access DOM nodes
            console.log(green)

            // then we can animate them like so..
           gsap.to(".green", {rotation: 360, x: 100, duration: 1});
           gsap.from(".purple", {rotation: -360, x: -100, duration: 1});
           gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});

        });

        return (
                    <div className="flex flex-col justify-center w-96">
                        
                        <div className="green h-80 w-35 border-2 border-red-500 mt-10" ref={green}>Komal</div>
                        <div className="purple h-80 w-35 border-2 border-red-500 mt-10" ref={purpule}>Komal</div>
                        <div className="blue h-80 w-35 border-2 border-red-500 mt-10" ref={blue}>Komal</div>
                        
                    </div>
            );
};




export default GSAP;