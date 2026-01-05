import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function GSAP()  {
    const green = useRef();
    const purpule = useRef();
    const blue = useRef();
    useGSAP(() => {
            // Refs allow you to access DOM nodes
            // console.log(green)

            // then we can animate them like so..
           gsap.to(green.current, {rotation: 360, x: 100, duration: 1});
           gsap.from(purpule.current, {rotation: -360, x: -100, duration: 5});
           gsap.fromTo(blue.current, {x: -100},{rotation: 360, x: 100, duration: 10});

           let split = SplitText.create(".split", {type: "words, chars"});

           gsap.from(split.chars, {
            duration:1,
            y:100,
            autoAlpha:0,
            stagger:0.05
           })

        });

        return (
                    <div className="flex flex-col justify-center w-96">
                        
                        <div ref={green} className="h-80 w-35 border-2 mt-10 bg-red-600" >Komal</div>
                        <div ref={purpule} className="h-80 w-35 border-2 mt-10 bg-green-600" >Aadya</div>
                        <div ref={blue} className="h-80 w-35 border-2 mt-10 bg-blue-600" >Aagastya</div>
                        <div className="split">With autoSplitenabled, you should always create your animations in the onSplit() callback so that
                            if it re-splits later, the resulting animations affect the freshly-created line/word/character elements instead of the ones from the
                            previous split.
                        </div>
                        
                    </div>
            );
};




export default GSAP;