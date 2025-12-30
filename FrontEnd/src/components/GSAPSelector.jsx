import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { forwardRef, useEffect, useRef } from "react";


export default function GSAPSelector() {
  const boxRef = useRef(null);
  let data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  useEffect(() => {
    if (boxRef.current) {
      console.log("Box DOM node:", boxRef.current);
      console.log("split",gsap.utils.splitColor("red"))
      console.log("split",gsap.utils.toArray("hight light the things"))
      boxRef.current.style.backgroundColor = 'lightgray'
    }
  }, []);
  var array = [1,2,3,4,5]
  console.log('shuffle',gsap.utils.shuffle(array));
  return (
    <div>
      <h1>React forwarding refs</h1>
      <Box ref={boxRef}>
        <p>This is content inside the box</p>
      </Box>
    </div>
  );
}

