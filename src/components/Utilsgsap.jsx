import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function GSAP() {
  const green = useRef();
  const purpule = useRef();
  const blue = useRef();
  useGSAP(() => {
                // get a function that, when fed an index value, will return a value according to the configuration options
                let distributor = gsap.utils.distribute({
                // the base value to start from (default:0)
                base: 50,

                // total amount to distribute across the targets (this amount gets added to the "base" when returned)
                amount: 100,

                // position in the targets array to begin from (can be an index number, a keyword like "start", "center",
                // "edges", "random", or "end", or an array of ratios along the x-axis and y-axis like [0.25, 0.75]) (default: 0)
                from: "center",

                // bases distribution on the element's position in a grid [rows, columns] instead of a flat array.
                // You can also define the rows and columns in array format like [5, 10]
                grid: "auto",

                // for grid-based distributing, you can limit measurements to one axis ("x" or "y")
                axis: "y",

                // distributes based on an ease curve!
                ease: "power1.inOut",
                });

                // get an array of all the elements with the class ".box" applied
                let targets = gsap.utils.toArray(".box");

                // Now for any target element, we can just feed in its index from the targets array (along with the target
                // and array) and it'll do all the calculations and return the appropriate amount:
                let distributedValue = distributor(2, targets[2], targets);

                gsap.to(".class", {
                scale: gsap.utils.distribute({
                    base: 0.5,
                    amount: 2.5,
                    from: "center",
                }),
                });
  });

  return <div className="flex flex-col justify-center w-96">
    
  </div>;
}

export default GSAP;
