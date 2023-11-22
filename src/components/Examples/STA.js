import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const squareVariants = {
  visible: { opacity: 1, scale: 3, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
  //Here you created a variant object called squareVariants. 
  //Inside the object, you have the property visible that you 
  //passed an object as the value. When the element is visible you want it to:
  //have opacity be 1, scale to 4x it's size, have the transition from hidden to visible to have a duration of 1 second.
};


function Square() {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  //when the square is in view, the animation starts

  useEffect(() => {
    if(inView) {
      controls.start("visible");
    }
  }, [controls, inView])

  return (
     <motion.div
      className="square"
      initial="hidden"
      animate={controls}
      variants={squareVariants}
      ref={ref}
    >
    </motion.div>
  );
}

function STA() {
  //Scroll Triggered Animation
  return (
    <motion.div 
      className="sta"
    >
      <h1 className="title">
        Scroll Down
      </h1>
      <Square />
      <Square />
      <Square />
      <Square />
    </motion.div>
  )
}

export default STA


/*
You'll use Framer Motion with "react-intersection-observer" to trigger 
"squares" and thrn "scale" animation to grow bigger when they come into view.

"react-intersection-observer" is a React flavored version of the 
Intersection Observer API to tell you when an element enters or leaves the viewport.
Contains both a Hooks, render props and plain children implementation.

By default, Framer Motion runs animations once the page loads. The useAnimation() hook gives 
you access to the helper methods "start" and "stop" to give you more control over 
when the animation begins and ends. You'll use the start method to set what animation gets 
trigged when the element is in view. Create a controls variable and set to useAnimation() and change 
the "animate" prop to controls.

The useInView hook returns an array with a ref and a Boolean inView that checks if the status of an 
element being in view is "true" or "false".

We trigger the Animation with useEffect() Hook. 
Inside of the Square component useEffect with an if statement. 
If inView is true set it run the controls.start() method and pass it 
the "squareVariants" property of "visible". 
Use controls and inView as the dependecy array. 

When the boolean value of "inView" changes (when the element we referenced is in view, and inView changes 
from false to true.), it will run useEffect to trigger controls.start() to run the visible animation.

*/
