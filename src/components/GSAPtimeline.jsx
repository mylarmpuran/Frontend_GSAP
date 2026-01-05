import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function GSAPtimeline() {
  const green = useRef();
  const purpule = useRef();
  const blue = useRef();
  const green1 = useRef();
  const purpule1 = useRef();
  const blue1 = useRef();
  useGSAP(() => {
   
    console.log("im from utils", gsap.utils.random(0, 100))
    let tl = gsap.timeline({repeat:-1, repeatDelay:1, yoyo: true});
    tl.to(green.current, { rotation: 360, x: 100, duration: 1 });
    tl.to(purpule.current, { rotation: -360, x: -100, duration: 5 });
    tl.to(
      blue.current,
      { x: -100 },
      { rotation: 360, x: 100, duration: 10 }
    );
    tl.to(green1.current, { rotation: 360, x: 100, duration: 1 });
    tl.from(purpule1.current, { rotation: -360, x: -100, duration: 5 });
    tl.fromTo(
      blue1.current,
      { x: -100 },
      { rotation: 360, x: 100, duration: 10 }
    );

    let split = SplitText.create(".split", { type: "words, chars" });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  });

  return (
    <div className="flex flex-col justify-center w-96">
      <div ref={green} className="h-80 w-35 border-2 mt-10 bg-red-600">
        Komal
      </div>
      <div ref={purpule} className="h-80 w-35 border-2 mt-10 bg-green-600">
        Aadya
      </div>
      <div ref={blue} className="h-80 w-35 border-2 mt-10 bg-blue-600">
        Aagastya
      </div>
      <div ref={green1} className="h-80 w-35 border-2 mt-10 bg-red-600">
        Komal
      </div>
      <div ref={purpule1} className="h-80 w-35 border-2 mt-10 bg-green-600">
        Aadya
      </div>
      <div ref={blue1} className="h-80 w-35 border-2 mt-10 bg-blue-600">
        Aagastya
      </div>
      <div className="split">
        With autoSplitenabled, you should always create your animations in the
        onSplit() callback so that if it re-splits later, the resulting
        animations affect the freshly-created line/word/character elements
        instead of the ones from the previous split.
      </div>
    </div>
  );
}

export default GSAPtimeline;
