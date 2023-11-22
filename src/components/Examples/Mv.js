import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"

const Mv = () => {
    //MotionValue Path Drawing, Drag, Transform

    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

    return (
        <motion.div 
          style={{ 
            background,
            width: "30rem",
            height: "20rem",
            display: "flex",
            justifyContent: 'center',
            marginBottom: "1rem",
            padding: "1rem"
        }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{
                 x,
                 backgroundColor: "white",
                 width: "10rem",
                 height: "10rem",
                 padding: "1rem"
            }}
          >
            Drag Left/Right
           {/* <Icon x={x} /> */}
          </motion.div>
        </motion.div>
      )


}

export default Mv

/*
Motion uses "MotionValues" to track the state and velocity of 
every animating value.

By making MotionValues yourself, you can create declarative chains 
of values that map from one into the other.
*/