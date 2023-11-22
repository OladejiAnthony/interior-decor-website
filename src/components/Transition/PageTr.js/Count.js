import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Count() {
    //Count Animation
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 50, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <div
        style={{
            backgroundColor: "white",
            //borderRadius: "50%",
            width: "40rem",
            height: "5rem",
            margin: "1rem",
            padding: "2rem",
            color: ""
        }}
    >
        <motion.h1>{rounded}</motion.h1>;
    </div>
    
  )

}

/*
This effect is commonly used for displaying numbers and statistics 
and is often used in countdown timers.

To implement this effect:
1. we'll utilize "MotionValues" to monitor 
the state and velocity of the values.
   We will pass it an initial state or value which will be 0. Then we 
   will count up to 50. Keep in mind that you need to round the count to 
   make sure no decimal points are shown. 
   For this, useTransform() hook will be used.
2. and we'll employ the "animate" function 
to specify the animation duration.

In the code above, animation.stop is being used to stop the animation when 
the component is unmounted. This ensures that the animation is terminated, 
and any resources associated with the animation are released.
*/

